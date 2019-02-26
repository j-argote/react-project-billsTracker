import {ADDBILL} from '../actions/userInputsAction';

const initialState = {
    billsList: [
        {
            billCategory: "Rent",
            billName: "reliant",
            billAmount: 30,
            billDueDate: "01/23"
        }
    ]
}




function userInputsReducer(state = initialState, action){
    switch(action.type){
        case ADDBILL:
            return {
                ...state,
                billsList: state.billsList.concat({
                    billCategory: action.billData.billCategory,
                    billName: action.billData.billName,
                    billAmount: parseFloat(action.billData.billAmount).toFixed(2),
                    billDueDate: action.billData.billDueDate
                })
            }
        default:
            return state
    }
}


export default userInputsReducer