import { Map } from "immutable";

import startUpActions from "./actions";




const initState = new Map({



});

export default function startUpReducer(state = initState, action) {
  switch (action.type) {

    
        


        //clear Props
        case startUpActions.CLEAR_PROPS:
           return{
               ...state,
               errorDescription:undefined,
               data:undefined,
               loading:false,
               jwttoken:undefined,
               errormessageLogin:undefined,
               isAvailableUser:true
                 
          }


    case startUpActions.DEFAULT_RESULT:
      return state;
    case startUpActions.DEFAULT_ERROR:
      return state;
    default:
      return state;
  }
}
