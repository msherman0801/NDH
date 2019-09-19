export default function disasterReducer(state = {}, action) {
    switch(action.type) {
        case 'GETTING_CITY_IDS':
            console.log('loading city list')
        case 'RETRIEVED_CITY_IDS':
            return {...state, cities: action.payload }
        case 'GETTING_CITY_DATA':
            console.log('loading city data', action.payload)
        case 'RETRIEVED_CITY_DATA':
        console.log('retrieveddddd', action.payload)
            return {...state, cityData: action.payload  }
        default:
            return state
    }
}