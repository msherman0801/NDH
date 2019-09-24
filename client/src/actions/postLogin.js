export const postLogin = (formData) => {
    return (dispatch) => {
        dispatch({type: 'POSTING_LOGIN'})
        return (
            fetch('http://localhost:4000/login', {
                mode: 'cors',
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(res => res.json())
            .then(response => dispatch({type:'RECIEVED_LOGIN_RESPONSE', payload: response}))
        )
    }
}
