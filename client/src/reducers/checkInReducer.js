export default function checkInReducer(state = {}, action) {
    switch(action.type) {
        case 'POSTING_CHECK_IN':
            console.log('loading')
            // return {...state, state.person: {...state.person, action.payload}}
        case 'CHECK_IN':
            return { person: action.payload }
        default:
            return state
    }
}