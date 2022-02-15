const counterReducer =  (state = '', action) =>{
    switch(action.type){
        case 'INCREMENT':
            console.log("value of payload",action.payload)
            return state = action.payload
        case 'DECREMENT':
            return state - 1
        default:
            return state;
    }
}

export default counterReducer;