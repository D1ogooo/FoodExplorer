export const IncludeReducer = (state, action) => {
 switch (action.type) {
 case 'Increment':
  return { ...state, count: state.count +1 }  
 case 'Decrement':
  return { ...state, count: state.count -1 >= 0 ? state.count -1 : 0 }
 default: 
  return "This action doens't exist"
 }
}