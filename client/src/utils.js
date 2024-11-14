/**
 * Higher-order function for async/await error handling
 * @param {function} fn an async function
 * @returns {function}
 */
export const catchErrors = fn => {
    return function(...args) {
        return fn(...args).catch((err) => {
            console.error(err);
        })
    }
}

/**
 * Format milliseconds to time duration
 * @param {number} ms number of milliseconds
 * @returns {string} formatted duration string
 * @example 216699 -> '3:36'
 */
export const formatDuration = ms => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor(((ms % 60000) / 1000));
    return `${minutes}:${seconds < 10 ? '0': ''}${seconds}`;
}

/**
 * Format decimal to percentage
 * @param {float} number decimal value
 * @returns {string} formatted duration string
 * @example 0.1536 -> '15%'
 */
export const formatPercentage = number => {
    return `${(number * 100).toFixed(0)}`;
}