export default function personsReducer(state = {}, action) {
    switch(action.type) {
        case 'GETTING_PERSONS_LIST':
            console.log('loading persons list')
        case 'RETRIEVED_PERSONS_LIST':
        console.log(action.payload)
            return {...state, list: action.payload }
        default:
            return state
    }
}