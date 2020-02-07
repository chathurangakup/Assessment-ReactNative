import { Map } from "immutable";

import startUpActions from "./actions";


const postData=undefined
const usersData=undefined
const imageData=undefined

const initState = new Map({
postData,
usersData,
imageData


});

export default function startUpReducer(state = initState, action) {
  switch (action.type) {

    case startUpActions.IMAGE_DATA:
      return{
        ...state,
        loading:true,
       
      }
    case startUpActions.IMAGE_DATA_RESULT:
        return{
          loading:false,
          imageData:action.result

        }
  
    case startUpActions.IMAGE_DATA_ERROR:
        return{
            loading:false, 
           
       }




    case startUpActions.USERS_DATA:
      return{
        ...state,
        loading:true,
       
      }
    case startUpActions.USERS_DATA_RESULT:
        return{
          loading:false,
          usersData:action.result

        }
  
    case startUpActions.USERS_DATA_ERROR:
        return{
            loading:false, 
           
       }


    case startUpActions.POST_DATA:
      return{
        ...state,
        loading:true,
       
      }
    case startUpActions.POST_DATA_RESULT:
        return{
          loading:false,
          postData:action.result

        }
  
    case startUpActions.POST_DATA_ERROR:
        return{
            loading:false, 
           
       }

        


        //clear Props
        case startUpActions.CLEAR_PROPS:
           return{
               ...state,
               loading:false,
                postData:undefined,
                usersData:undefined,
                imageData:undefined
                 
          }


    case startUpActions.DEFAULT_RESULT:
      return state;
    case startUpActions.DEFAULT_ERROR:
      return state;
    default:
      return state;
  }
}
