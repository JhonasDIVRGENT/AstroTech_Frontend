import './PrimaryButton.css';

/**
 * Botón principal de acción
 * @param {Object} props
 * @param {Function} props.onClick - callback al hacer click
 * @param {boolean} props.disabled - si el botón está deshabilitado
 * @param {React.ReactNode} props.children - contenido del botón
 */
export default function PrimaryButton({ onClick, disabled = false, children }) {
    return (
        <button
            className="primary-button"
            onClick={onClick}
            disabled={disabled}
            type="button"
        >
            {children}
        </button>
    );
}
