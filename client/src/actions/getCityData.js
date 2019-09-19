export const getCityData = (cityId) => {
    return (dispatch) => {
        dispatch({type: 'GETTING_CITY_DATA'})
        return (
            fetch('http://localhost:4000/getcitydata', {
                mode: 'cors',
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({city_id:cityId})
            })
            .then(res => res.json())
            .then(cityData => dispatch({type:'RETRIEVED_CITY_DATA', payload: cityData}))
        )
    }
}
