export const getCityIds = (formData) => {
    return (dispatch) => {
        dispatch({type: 'GETTING_CITY_IDS'})
        return (
            fetch('http://localhost:4000/getcityids', {
                mode: 'cors',
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(res => res.json())
            .then(cities => dispatch({type:'RETRIEVED_CITY_IDS', payload: cities}))
        )
    }
}
