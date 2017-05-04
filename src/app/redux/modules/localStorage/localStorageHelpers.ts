import {initialLocalStorageState} from './index';

export const loadFromLocalStorage = () => {
  try {
    const serializedLocalStorage = localStorage.getItem('sna');
    if (serializedLocalStorage === null) {
      return initialLocalStorageState;
    }

    return JSON.parse(serializedLocalStorage);
  } catch (e) {
    return initialLocalStorageState;
  }
};

export const saveToLocalStorage = (state) => {
  try {
    const serializedLocalStorage = JSON.stringify(state);
    localStorage.setItem('sna', serializedLocalStorage);
  } catch (e) { /* Ignore write errors */ }
};
