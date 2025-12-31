import './SectionTitle.css';

/**
 * Componente para títulos de sección con estética cyberpunk
 * @param {Object} props
 * @param {string} props.title - texto del título
 * @param {string} props.icon - emoji o icono opcional
 */
export default function SectionTitle({ title, icon }) {
    return (
        <h3 className="section-title">
            {icon && <span className="section-title__icon">{icon}</span>}
            <span className="section-title__text">{title}</span>
        </h3>
    );
}
