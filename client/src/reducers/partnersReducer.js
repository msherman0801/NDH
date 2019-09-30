export default function partnersReducer(state = { user: null  
}, action) {
    switch (action.type) {
        case 'POSTING_REGISTRATION':
            console.log('posting registration')
            return { ...state, loading: true }
        case 'RECIEVED_REGISTRATION_RESPONSE':
            console.log('RECIEVED_REGISTRATION_RESPONSE', action.payload)
            return { ...state, loading: false, user: action.payload }
        case 'POSTING_LOGIN':
            console.log(' posting login')
            return { ...state, loading: true }
        case 'RECIEVED_LOGIN_RESPONSE':
            console.log('RECIEVED_lOGIN_RESPONSE', action.payload)
            return { ...state, loading: false, user: action.payload.user }
        default:
            return state;
    }
}