import { ZODIAC_SIGNS } from '../utils/zodiac.js';
import './SignGrid.css';

/**
 * Cuadrícula de selección rápida de signos zodiacales
 * @param {Object} props
 * @param {string} props.selectedSign - signo actualmente seleccionado
 * @param {Function} props.onSelect - callback al seleccionar un signo
 */
export default function SignGrid({ selectedSign, onSelect }) {
    return (
        <div className="sign-grid">
            {ZODIAC_SIGNS.map((sign) => (
                <button
                    key={sign.value}
                    className={`sign-chip ${selectedSign === sign.value ? 'active' : ''}`}
                    onClick={() => onSelect(sign.value)}
                    title={sign.label}
                >
                    <span className="sign-chip__symbol">{sign.symbol}</span>
                    <span className="sign-chip__label">{sign.label}</span>
                </button>
            ))}
        </div>
    );
}
