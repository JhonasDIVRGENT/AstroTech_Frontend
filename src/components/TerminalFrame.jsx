// src/components/TerminalFrame.jsx
import '../styles/oracle.css';

/**
 * Marco de terminal con esquinas reforzadas y etiqueta
 * @param {Object} props
 * @param {React.ReactNode} props.children - contenido interno
 * @param {string} props.label - etiqueta de la ventana
 */
export default function TerminalFrame({ children, label = "[ORÁCULO.SYS]" }) {
    return (
        <div className="terminal-frame">
            <div className="corner c-tl" /><div className="corner c-tr" />
            <div className="corner c-bl" /><div className="corner c-br" />
            <span style={{
                fontSize: '0.65rem',
                color: 'var(--neon-red)',
                position: 'absolute',
                top: '-10px',
                left: '20px',
                background: 'var(--bg-black)',
                padding: '0 8px',
                fontWeight: 'bold',
                border: '1px solid var(--neon-red-dim)'
            }}>
                {label}
            </span>
            {children}
        </div>
    );
}
