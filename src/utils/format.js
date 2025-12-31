/**
 * Capitaliza la primera letra de un string
 * @param {string} str - string a capitalizar
 * @returns {string} - string capitalizado
 */
export function capitalize(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Formatea un array de tecnologías para mostrar como lista
 * @param {Array<string>} stack - array de tecnologías
 * @returns {Array<string>} - array formateado
 */
export function formatStack(stack) {
    if (!Array.isArray(stack)) return [];
    return stack.filter(Boolean);
}

/**
 * Formatea una fecha ISO a formato legible
 * @param {string} isoDate - fecha en formato ISO
 * @returns {string} - fecha formateada
 */
export function formatDate(isoDate) {
    if (!isoDate) return '';
    try {
        const date = new Date(isoDate);
        return date.toLocaleString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    } catch {
        return isoDate;
    }
}
