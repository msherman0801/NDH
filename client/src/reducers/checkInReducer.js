export default function checkInReducer(state = {person: {}}, action) {
    switch(action.type) {
        case 'POSTING_CHECK_IN':
            console.log('loading')
            // return {...state, state.person: {...state.person, action.payload}}
        case 'CHECK_IN':
            console.log(action.payload)
        default:
            return state
    }
}