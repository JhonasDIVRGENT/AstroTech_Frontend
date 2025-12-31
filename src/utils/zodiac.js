/**
 * Lista de signos zodiacales en español
 * Usados para el selector de signos en la UI
 */
export const ZODIAC_SIGNS = [
    { value: 'aries', label: 'Aries', symbol: '♈' },
    { value: 'tauro', label: 'Tauro', symbol: '♉' },
    { value: 'geminis', label: 'Géminis', symbol: '♊' },
    { value: 'cancer', label: 'Cáncer', symbol: '♋' },
    { value: 'leo', label: 'Leo', symbol: '♌' },
    { value: 'virgo', label: 'Virgo', symbol: '♍' },
    { value: 'libra', label: 'Libra', symbol: '♎' },
    { value: 'escorpio', label: 'Escorpio', symbol: '♏' },
    { value: 'sagitario', label: 'Sagitario', symbol: '♐' },
    { value: 'capricornio', label: 'Capricornio', symbol: '♑' },
    { value: 'acuario', label: 'Acuario', symbol: '♒' },
    { value: 'piscis', label: 'Piscis', symbol: '♓' }
];

/**
 * Obtiene el label de un signo por su value
 * @param {string} value - valor del signo (ej: 'aries')
 * @returns {string} - label del signo (ej: 'Aries')
 */
export function getSignLabel(value) {
    const sign = ZODIAC_SIGNS.find(s => s.value === value);
    return sign ? sign.label : value;
}
