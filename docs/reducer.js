inc = {type:'INC', payload:1};
dec = {type:'DEC', payload:1};
addTodo = todo => ({type:'TODO', payload:todo});


[inc,inc,dec, addTodo('placki') ,inc].reduce( (state,action)=>{
    switch(action.type){
        case "INC": return {...state, counter: state.counter + action.payload  };
        case "DEC": return {...state, counter: state.counter - action.payload};
        case 'TODO': return {...state, todos: [...state.todos, action.payload ] };
        default:
        return state
    }
}, {
    counter:0,
    todos:[]
})
