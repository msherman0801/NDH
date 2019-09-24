export const postRegistration = (formData) => {
    return (dispatch) => {
        dispatch({type: 'POSTING_REGISTRATION'})
        return (
            fetch('http://localhost:4000/register', {
                mode: 'cors',
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(res => res.json())
            .then(response => dispatch({type:'RECIEVED_REGISTRATION_RESPONSE', payload: response}))
        )
    }
}
