import { useState, useEffect } from "react";

const LS_KEY = "smc_state_v2";

export function useLocalState(key, initialValue) {
  // Get the full localStorage key
  const fullKey = `${LS_KEY}_${key}`;
  
  // Initialize state with value from localStorage or initial value
  const [state, setState] = useState(() => {
    try {
      const item = window.localStorage.getItem(fullKey);
      if (item === null) {
        return initialValue;
      }
      const parsed = JSON.parse(item);
      // Validate that parsed value is not null/undefined unless initialValue allows it
      if (parsed === null && initialValue !== null) {
        return initialValue;
      }
      return parsed;
    } catch (error) {
      console.error(`Error reading localStorage key "${fullKey}":`, error);
      return initialValue;
    }
  });

  // Update localStorage when state changes
  useEffect(() => {
    try {
      if (state === undefined) {
        window.localStorage.removeItem(fullKey);
      } else {
        window.localStorage.setItem(fullKey, JSON.stringify(state));
      }
    } catch (error) {
      console.error(`Error setting localStorage key "${fullKey}":`, error);
      // If localStorage is full or unavailable, try to clear some space
      if (error.name === 'QuotaExceededError') {
        try {
          // Remove oldest entries to make space
          const keys = Object.keys(window.localStorage);
          const appKeys = keys.filter(k => k.startsWith(LS_KEY)).sort();
          if (appKeys.length > 10) {
            window.localStorage.removeItem(appKeys[0]);
          }
          // Try again
          window.localStorage.setItem(fullKey, JSON.stringify(state));
        } catch (retryError) {
          console.error("Failed to save after clearing space:", retryError);
        }
      }
    }
  }, [fullKey, state]);

  return [state, setState];
}

// Helper function to clear all app data
export function clearAppData() {
  try {
    const keys = Object.keys(window.localStorage);
    keys.forEach(key => {
      if (key.startsWith(LS_KEY)) {
        window.localStorage.removeItem(key);
      }
    });
  } catch (error) {
    console.error("Error clearing app data:", error);
  }
}

// Helper function to get all app data
export function getAllAppData() {
  try {
    const data = {};
    const keys = Object.keys(window.localStorage);
    keys.forEach(key => {
      if (key.startsWith(LS_KEY)) {
        const shortKey = key.replace(`${LS_KEY}_`, '');
        try {
          data[shortKey] = JSON.parse(window.localStorage.getItem(key));
        } catch (parseError) {
          console.error(`Error parsing localStorage key "${key}":`, parseError);
          data[shortKey] = null;
        }
      }
    });
    return data;
  } catch (error) {
    console.error("Error getting app data:", error);
    return {};
  }
}

// Helper function to validate and repair corrupted data
export function validateAppData() {
  try {
    const data = getAllAppData();
    const issues = [];
    
    Object.entries(data).forEach(([key, value]) => {
      if (value === null && key !== 'route') {
        issues.push(`Corrupted data in ${key}`);
      }
    });
    
    if (issues.length > 0) {
      console.warn("Data validation issues found:", issues);
      return false;
    }
    
    return true;
  } catch (error) {
    console.error("Error validating app data:", error);
    return false;
  }
}
