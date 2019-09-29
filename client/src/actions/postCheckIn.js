export const postCheckIn = (formData) => {
    return (dispatch) => {
        dispatch({type: 'POSTING_CHECK_IN'})
        return (
            fetch('https://api.ipify.org?format=json')
            .then(res => res.json())
            .then(ip => {
                formData.geolocation = ip.ip
                fetch('http://localhost:4000/checkin', {
                    mode: 'cors',
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(formData)
                })
                .then(response => response.json())
                .then(person => dispatch({type:'CHECK_IN', payload: person}))
            })
        )
    }
}
