const rangeLocal = store => {
        store.subscribe((mutation, state) => {
        // Store the state object as a JSON string
        localStorage.setItem('store', JSON.stringify(state));
        });
}

export default  rangeLocal