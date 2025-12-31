import './Card.css';

/**
 * Componente Card reutilizable para secciones del oráculo
 * @param {Object} props
 * @param {React.ReactNode} props.children - contenido de la card
 * @param {boolean} props.highlight - si la card debe destacarse visualmente
 */
export default function Card({ children, highlight = false }) {
    return (
        <div className={`card ${highlight ? 'card--highlight' : ''}`}>
            {children}
        </div>
    );
}
