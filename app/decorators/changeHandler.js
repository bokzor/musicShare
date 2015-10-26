const addChangeHandler = {
    changeHandler(key, attr, event) {
        var state = {};
        state[key] = this.state[key] || {};
        state[key][attr] = event.currentTarget.value;
        this.setState(state);
    }
}

export default addChangeHandler