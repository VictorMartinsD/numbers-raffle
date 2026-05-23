/**
 * Storage helpers for persisted local data.
 */
const STORAGE_KEY = "template-base-data";

/**
 * Load stored items from localStorage.
 * @returns {Array<object>} Stored items list or an empty array when unavailable
 */
export function loadFromStorage() {
  try {
    const storedData = localStorage.getItem(STORAGE_KEY);

    if (!storedData) return [];

    const parsedData = JSON.parse(storedData);
    return Array.isArray(parsedData) ? parsedData : [];
  } catch (error) {
    console.warn("Could not load saved data from storage:", error);
    return [];
  }
}

/**
 * Persist items to localStorage.
 * @param {Array<object>} data - Data collection to store
 */
export function saveToStorage(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.warn("Could not persist data to storage:", error);
  }
}
