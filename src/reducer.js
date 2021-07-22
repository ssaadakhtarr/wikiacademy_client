export const initialState = {
    User: null,
    Cke: '',
    Admin: null,
}

const reducer = (state, action) => {

    switch(action.type){
        case 'User_Details':
            return {
                ...state,
                User:action.data
            };

        case 'User_Details_Remove':
            return {
                ...state,
                User:action.data
            }
        case 'Cke_Value':
            return {
                ...state,
                Cke:action.data
            }
        case 'Admin_Details':
                return {
                    ...state,
                    Admin:action.data
                }
        
            
        default: 
            return state;
    }
}

export default reducer;