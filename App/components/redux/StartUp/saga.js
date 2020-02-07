import { all, takeEvery, put, fork, call } from "redux-saga/effects";
// API URIs goes here, now i do not use any
import actions from "./actions";
// Properties here - now i do not use any
const baseUrl='https://jsonplaceholder.typicode.com'
const postURL=baseUrl+'/posts';
const usersURL=baseUrl+'/users';
const imageURL=baseUrl+'/photos?album=1';


export function* getImageData(){

  yield takeEvery(actions.IMAGE_DATA, function* (payload) {


    const url = imageURL;
    console.log(url);
    try {
      const response = yield fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: ""
      });
     
      const result = yield response.json();
      // console.log(result)
     // console.log(response.ok)
      if (response.ok) {
      
          yield put({ type: actions.IMAGE_DATA_RESULT, result });
          console.log(result)
      } else {
        yield put({
          type: actions.IMAGE_DATA_ERROR,
          result
        });
       // console.log(result)
      }
    } catch (error) {
      yield put({ type: actions.IMAGE_DATA_ERROR });
    }
  });
}





export function* getUsersData(){

  yield takeEvery(actions.USERS_DATA, function* (payload) {


    const url = usersURL;
    console.log(url);
    try {
      const response = yield fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: ""
      });
     
      const result = yield response.json();
       //console.log(result)
     // console.log(response.ok)
      if (response.ok) {
      
          yield put({ type: actions.USERS_DATA_RESULT, result });
       // console.log(result)
      } else {
        yield put({
          type: actions.USERS_DATA_ERROR,
          result
        });
       // console.log(result)
      }
    } catch (error) {
      yield put({ type: actions.USERS_DATA_ERROR });
    }
  });
}



export function* getPostsData(){

  yield takeEvery(actions.POST_DATA, function* (payload) {


    const url = postURL;
    console.log(url);
    try {
      const response = yield fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: ""
      });
     
      const result = yield response.json();
      //console.log(result)
     // console.log(response.ok)
      if (response.ok) {
      
          yield put({ type: actions.POST_DATA_RESULT, result });

       
       // console.log(result)
      } else {
        yield put({
          type: actions.POST_DATA_ERROR,
          result
        });
       // console.log(result)
      }
    } catch (error) {
      yield put({ type: actions.POST_DATA_ERROR });
    }
  });
}



export function* defaultFunc() {
}

export default function* rootSaga() {
  yield all([
      fork(getPostsData),
      fork(getUsersData),
      fork(getImageData)
     
   
  ]);
}
