export function loadState() {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}

export function saveState(state) {
  try {
    const serializedState = JSON.stringify({
      auth: state.auth,
    });
    localStorage.setItem('state', serializedState);
  } catch (err) {
    // Ignore the errors.
  }
}

