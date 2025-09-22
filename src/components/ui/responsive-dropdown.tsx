import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface DropdownOption {
  id: string;
  label: string;
  value: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

interface ResponsiveDropdownProps {
  options: DropdownOption[];
  value?: string;
  placeholder?: string;
  onChange: (value: string) => void;
  className?: string;
  triggerClassName?: string;
  menuClassName?: string;
  optionClassName?: string;
  disabled?: boolean;
  searchable?: boolean;
  maxHeight?: string;
}

const ResponsiveDropdown: React.FC<ResponsiveDropdownProps> = ({
  options,
  value,
  placeholder = 'Selecione uma opção',
  onChange,
  className = '',
  triggerClassName = '',
  menuClassName = '',
  optionClassName = '',
  disabled = false,
  searchable = false,
  maxHeight = '200px'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const selectedOption = options.find(option => option.value === value);

  const filteredOptions = searchable
    ? options.filter(option =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : options;

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setSearchTerm('');
        setHighlightedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setHighlightedIndex(prev => 
            prev < filteredOptions.length - 1 ? prev + 1 : 0
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setHighlightedIndex(prev => 
            prev > 0 ? prev - 1 : filteredOptions.length - 1
          );
          break;
        case 'Enter':
          e.preventDefault();
          if (highlightedIndex >= 0 && highlightedIndex < filteredOptions.length) {
            const option = filteredOptions[highlightedIndex];
            if (!option.disabled) {
              onChange(option.value);
              setIsOpen(false);
              setSearchTerm('');
              setHighlightedIndex(-1);
            }
          }
          break;
        case 'Escape':
          setIsOpen(false);
          setSearchTerm('');
          setHighlightedIndex(-1);
          triggerRef.current?.focus();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, highlightedIndex, filteredOptions, onChange]);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen && searchable && searchRef.current) {
      searchRef.current.focus();
    }
  }, [isOpen, searchable]);

  const handleToggle = () => {
    if (disabled) return;
    setIsOpen(!isOpen);
    if (!isOpen) {
      setSearchTerm('');
      setHighlightedIndex(-1);
    }
  };

  const handleOptionClick = (option: DropdownOption) => {
    if (option.disabled) return;
    onChange(option.value);
    setIsOpen(false);
    setSearchTerm('');
    setHighlightedIndex(-1);
  };

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      {/* Trigger Button */}
      <button
        ref={triggerRef}
        onClick={handleToggle}
        disabled={disabled}
        className={`w-full flex items-center justify-between px-4 py-3 bg-white border border-silver-mist/20 rounded-xl text-left transition-all duration-300 hover:border-luxury-gold/30 hover:shadow-elegant focus:outline-none focus:ring-2 focus:ring-luxury-gold/20 focus:border-luxury-gold/50 disabled:opacity-50 disabled:cursor-not-allowed ${
          isOpen ? 'border-luxury-gold/50 shadow-elegant' : ''
        } ${triggerClassName}`}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={selectedOption ? selectedOption.label : placeholder}
      >
        <div className="flex items-center space-x-3 min-w-0 flex-1">
          {selectedOption?.icon && (
            <div className="flex-shrink-0 w-5 h-5 text-luxury-gold">
              {selectedOption.icon}
            </div>
          )}
          <span className={`truncate ${selectedOption ? 'text-italian-navy' : 'text-charcoal/60'}`}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        </div>
        <div className="flex-shrink-0 ml-3">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-luxury-gold transition-transform duration-300" />
          ) : (
            <ChevronDown className="w-5 h-5 text-charcoal/60 transition-transform duration-300" />
          )}
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className={`absolute top-full left-0 right-0 mt-2 bg-white border border-silver-mist/20 rounded-xl shadow-luxury z-50 overflow-hidden ${
            menuClassName
          }`}
          style={{ maxHeight }}
        >
          {/* Search Input */}
          {searchable && (
            <div className="p-3 border-b border-silver-mist/20">
              <input
                ref={searchRef}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar..."
                className="w-full px-3 py-2 text-sm border border-silver-mist/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold/20 focus:border-luxury-gold/50"
              />
            </div>
          )}

          {/* Options List */}
          <div className="max-h-48 overflow-y-auto">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <button
                  key={option.id}
                  onClick={() => handleOptionClick(option)}
                  disabled={option.disabled}
                  className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-all duration-200 hover:bg-luxury-gold/10 focus:outline-none focus:bg-luxury-gold/10 ${
                    index === highlightedIndex ? 'bg-luxury-gold/10' : ''
                  } ${
                    option.disabled ? 'opacity-50 cursor-not-allowed' : 'hover:text-luxury-gold'
                  } ${optionClassName}`}
                  role="option"
                  aria-selected={option.value === value}
                >
                  {option.icon && (
                    <div className="flex-shrink-0 w-5 h-5 text-luxury-gold">
                      {option.icon}
                    </div>
                  )}
                  <span className="flex-1 text-sm text-italian-navy truncate">
                    {option.label}
                  </span>
                </button>
              ))
            ) : (
              <div className="px-4 py-3 text-sm text-charcoal/60 text-center">
                Nenhuma opção encontrada
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResponsiveDropdown;
