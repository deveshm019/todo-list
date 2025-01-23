import axios from 'axios';

const baseUrl = "http://localhost:5000/"

const getAllTodo = (setTodo)=>{
    axios.get(baseUrl).then(({data})=>{
        console.log(`Data: ${data}`);
        setTodo(data);
    })
}

const addTodo = (text,setText,setTodo)=>{
    axios.post(`${baseUrl}save`,{text})
    .then((data)=>{
        console.log(`Data: ${data}`);
        setText("");
        getAllTodo(setTodo);
    })
    .catch((error)=>{
        console.log(`Error: ${error}`)
    })
}

const updateTodo = (todoId,text,setTodo,setText,setIsUpdating)=>{
    axios.post(`${baseUrl}update`,{_id: todoId,text})
    .then((data)=>{
        setText("");
        setIsUpdating(false);
        getAllTodo(setTodo);
    })
    .catch((error)=>{
        console.log(`Error: ${error}`)
    })
}

const deleteTodo = (_id,setTodo)=>{
    axios.post(`${baseUrl}delete`,{_id})
    .then((data)=>{
        getAllTodo(setTodo);
    })
    .catch((error)=>{
        console.log(`Error: ${error}`)
    })
}

export {getAllTodo,addTodo,updateTodo,deleteTodo};