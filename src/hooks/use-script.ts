import { useEffect, useState } from 'react';

interface UseScriptOptions {
  src: string;
  async?: boolean;
  defer?: boolean;
  onLoad?: () => void;
  onError?: (error: Event) => void;
  condition?: boolean;
  removeOnUnmount?: boolean;
}

interface UseScriptReturn {
  loaded: boolean;
  error: boolean;
  script: HTMLScriptElement | null;
}

export const useScript = ({
  src,
  async = true,
  defer = false,
  onLoad,
  onError,
  condition = true,
  removeOnUnmount = false
}: UseScriptOptions): UseScriptReturn => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [script, setScript] = useState<HTMLScriptElement | null>(null);

  useEffect(() => {
    if (!condition || !src) return;

    // Check if script is already loaded
    const existingScript = document.querySelector(`script[src="${src}"]`);
    if (existingScript) {
      setLoaded(true);
      setScript(existingScript as HTMLScriptElement);
      return;
    }

    // Create new script element
    const scriptElement = document.createElement('script');
    scriptElement.src = src;
    scriptElement.async = async;
    scriptElement.defer = defer;

    const handleLoad = () => {
      setLoaded(true);
      setError(false);
      onLoad?.();
    };

    const handleError = (e: Event) => {
      setError(true);
      setLoaded(false);
      onError?.(e);
    };

    scriptElement.addEventListener('load', handleLoad);
    scriptElement.addEventListener('error', handleError);

    document.head.appendChild(scriptElement);
    setScript(scriptElement);

    return () => {
      scriptElement.removeEventListener('load', handleLoad);
      scriptElement.removeEventListener('error', handleError);
      
      if (removeOnUnmount) {
        document.head.removeChild(scriptElement);
      }
    };
  }, [src, async, defer, onLoad, onError, condition, removeOnUnmount]);

  return { loaded, error, script };
};

export default useScript;
