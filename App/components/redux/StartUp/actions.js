const actions = {
  DEFAULT: "DEFAULT",
  DEFAULT_RESULT: "DEFAULT_RESULT",
  DEFAULT_ERROR: "DEFAULT_ERROR",

  CLEAR_PROPS:"CLEAR_PROPS",

  POST_DATA:"POST_DATA",
  POST_DATA_RESULT:"POST_DATA_RESULT",
  POST_DATA_ERROR:"POST_DATA_ERROR",

  USERS_DATA:"USERS_DATA",
  USERS_DATA_RESULT:"USERS_DATA_RESULT",
  USERS_DATA_ERROR:"USERS_DATA_ERROR",

  IMAGE_DATA:"IMAGE_DATA",
  IMAGE_DATA_RESULT:"IMAGE_DATA_RESULT",
  IMAGE_DATA_ERROR:"IMAGE_DATA_ERROR",

  getImageData:()=>({
    type: actions.IMAGE_DATA,
  }),

  getUsersData:()=>({
    type: actions.USERS_DATA,
  }),


  getPostsData:() => ({
    type: actions.POST_DATA,
  }),



  defaultFunc: (value) => ({
    type: actions.DEFAULT,
    value
  }),

  clearProps: () =>({
    type: actions.CLEAR_PROPS,
    
  }),
};

export default actions;