import {createStore} from "redux"

const initialState ={
   list: [{Name:"yasiru"},{Name:"Dilan"}]

};
const reducer =(state,action)=>{
    switch(action.type){
        case 'ADD_TODO':
            return{...state}
        default:
            return{...state}
    }
}
const store= createStore(reducer,initialState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store