import { useState, useRef, useEffect } from 'react';
import { ZODIAC_SIGNS } from '../utils/zodiac.js';
import soundManager from '../utils/sounds.js';
import './SignSelect.css';

/**
 * Selector de signo zodiacal personalizado (Custom Dropdown)
 * @param {Object} props
 * @param {string} props.value - signo seleccionado
 * @param {Function} props.onChange - callback cuando cambia la selección
 * @param {boolean} props.disabled - si el selector está deshabilitado
 */
export default function SignSelect({ value, onChange, disabled = false }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Cerrar al hacer click fuera
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const selectedSign = ZODIAC_SIGNS.find(s => s.value === value);

    const handleToggle = () => {
        if (disabled) return;
        soundManager.play('CLICK');
        setIsOpen(!isOpen);
    };

    const handleSelect = (val) => {
        soundManager.play('CLICK');
        onChange(val);
        setIsOpen(false);
    };

    return (
        <div className="sign-select-custom" ref={dropdownRef}>
            <label className="sign-label">{"[SELECCIONAR_IDENTIDAD_ZODIACAL]"}</label>

            <div
                className={`select-trigger ${isOpen ? 'open' : ''} ${disabled ? 'disabled' : ''}`}
                onClick={handleToggle}
            >
                <span className="trigger-text">
                    {selectedSign ? `${selectedSign.symbol} ${selectedSign.label.toUpperCase()}` : '-- ELIGE UN SIGNO --'}
                </span>
                <span className="trigger-arrow">{isOpen ? '▲' : '▼'}</span>
            </div>

            {isOpen && (
                <div className="select-options-container">
                    <ul className="select-options-list">
                        {ZODIAC_SIGNS.map((sign) => (
                            <li
                                key={sign.value}
                                className={`select-option ${value === sign.value ? 'selected' : ''}`}
                                onClick={() => handleSelect(sign.value)}
                            >
                                <span className="option-symbol">{sign.symbol}</span>
                                <span className="option-label">{sign.label.toUpperCase()}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
