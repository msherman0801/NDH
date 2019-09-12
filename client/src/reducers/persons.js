export default function personsReducer(state = {persons:'test'}, action) {
    switch(action.type) {
        case 'ADD_PERSON':
            return {...state, persons: action.payload}
        default:
            return state
    }
}