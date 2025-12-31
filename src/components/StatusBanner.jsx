import './StatusBanner.css';

/**
 * Banner para mostrar mensajes de error o información
 * @param {Object} props
 * @param {string} props.type - tipo de mensaje ('error' | 'info' | 'success')
 * @param {string} props.message - mensaje a mostrar
 * @param {Function} props.onRetry - callback opcional para botón de reintentar
 */
export default function StatusBanner({ type = 'info', message, onRetry }) {
    return (
        <div className={`status-banner status-banner--${type}`}>
            <div className="status-icon">
                {type === 'error' && '⚠️'}
                {type === 'info' && 'ℹ️'}
                {type === 'success' && '✓'}
            </div>
            <p className="status-message">{message}</p>
            {onRetry && (
                <button className="retry-button" onClick={onRetry}>
                    Reintentar
                </button>
            )}
        </div>
    );
}
