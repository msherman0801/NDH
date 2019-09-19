export const getPersonsList = (formData) => {
    return (dispatch) => {
        dispatch({type: 'GETTING_PERSONS_LIST'})
        return (
            fetch('http://localhost:4000/getpersonslist', {
                mode: 'cors',
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(res => res.json())
            .then(list => dispatch({type:'RETRIEVED_PERSONS_LIST', payload: list}))
        )
    }
}
