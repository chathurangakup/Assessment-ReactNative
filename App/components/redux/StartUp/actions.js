const actions = {
  DEFAULT: "DEFAULT",
  DEFAULT_RESULT: "DEFAULT_RESULT",
  DEFAULT_ERROR: "DEFAULT_ERROR",

  CLEAR_PROPS:"CLEAR_PROPS",




  defaultFunc: (value) => ({
    type: actions.DEFAULT,
    value
  }),

  clearProps: () =>({
    type: actions.CLEAR_PROPS,
    
  }),
};

export default actions;