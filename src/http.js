export async function fetchAvailablePlaces() {
    const response = await fetch('http://localhost:3000/places');
    const resData = await response.json();
    
    if (!response.ok) {
        throw new Error('Failed to fetch places');
    }

    return resData.places;
}

export async function updateUserPlaces(places) {
    const response = await fetch('http://localhost:3000/user-places', {
        method: 'PUT',
        // ini {places: places} harusnya tapi bisa ditulis {places}
        body: JSON.stringify({ places }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const resData = await response.json();

    if(!response.ok) {
        throw new Error('Failed to update user data.');
    }

    return resData.message;
}