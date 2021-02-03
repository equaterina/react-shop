export function addToFavorites(payload) {
    return {
        type: 'ADD_TO_FAVORITES',
        payload
    }
}


export function removeFromFavorites(payload){
    return{
        type: 'REMOVE_FROM_FAVORITES',
        payload
    }
}


export function toggleFavorites(payload){
    console.log(payload)
    return(dispatch) => {
        console.log(payload.item.isToggled)
        //false => previous state => everything is reversed
        if(payload.item.isToggled !== undefined && payload.item.isToggled === false){
            dispatch(addToFavorites(payload))
        } else {
            dispatch(removeFromFavorites(payload))
        }
    } 
}