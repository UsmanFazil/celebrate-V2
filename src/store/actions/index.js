export const increment = (value) =>{
    console.log("Inside value",value)
    return {
        type: 'INCREMENT',
        payload: value
    }
}