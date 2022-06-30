import { useState }  from 'react';
import './App.css';




function App() {

  const [list, setList] =  useState([])
  const [text, setText] = useState("")
  const [editMode, setEditMode] = useState(false)
  const [editIndex, setEditIndex] = useState()

const addItem = () => {


  if (!text) {
    alert ("helo text")
    return
  }

  const templist = [...list]
  templist.push(text)
  setList(templist)

  resetState()
}





const deleteItem = (index) => {

const templist = [...list]
templist.splice(index, 1)
setList(templist)

resetState()
}



const editItem = (index) => {

  setText(list[index])
  setEditMode(true)
  setEditIndex(index)

}



const updateItem = () => {

const templist = [...list]

templist[editIndex] = text
setList (templist)
setEditMode(false)
resetState()

}


const resetState = ()  => {
setText("")
setEditMode(false)
}


  return (
    <div className="App">
      <h1>todo list</h1>
      <input placeholder="enter your name" 
      onCharge={e => setText(e.target.value)}
      value={text}/>
      {editMode ?
      

      <button onClick={updateItem}>update</button>
      :
      <button onClick={addItem}>additem</button>
    
    }
      
    


      <ul>
        {list.map((item, index) => {
        return <li>{item}

        <button>delete</button>
        <button>Edit</button>

           </li>
          })}
          </ul>
    </div>
    



  );
}

export default App;
