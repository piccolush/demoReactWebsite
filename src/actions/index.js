export const HotelFormSubmit = (data) => (dispatch, getState) => {
    return fetch(`https://foodpoint-1b02b.firebaseio.com/`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
}