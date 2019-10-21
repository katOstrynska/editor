export default {
    addElement (state, payload) {
        let settings = JSON.parse(JSON.stringify(payload.settings))
        state.elements.push(settings);
    }
}