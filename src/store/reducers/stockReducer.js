
const INITIAL_STATE = {
    
}
export default stockReducer = (state = {}, action) => {
    switch(action.type) {
        case 'product_added':
        return {
            ...state,
            isProductAdded: true
        }
    }
}