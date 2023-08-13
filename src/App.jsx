
import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput]= useState("")
  const [list, setList]= useState([])

  const inputHandle= (e) => {
    setInput(e.target.value)
  }

  const addList= () => {
    setList( (prev) => {
      return [...prev, input]
    })
    setInput("")
  }

  const deleteItem= (index) => {
    setList( (prev) => {
      const newList= [...prev]
      newList.splice(index, 1)
      return newList
    })
  }

  const editItem= (index) => {
    setInput(list[index])
    setList( (prev) => {
      const newList= [...prev]
      newList.splice(index, 1)
      return newList
    })
  }

  

  return (
    <>
      <input type="text" placeholder='add a items' onChange={inputHandle} value={input}/>
      <button onClick={addList}>+</button>
      <br />

        {list.map( (item, index) => {
          return (
            <>
            <button onClick={() => deleteItem(index)}>x</button>
            <span key={index}>{item}</span>
            <button onClick={ () => editItem(index)}>✍</button>
            <br />
            </>
          )
        })}
    </>
  )
}

export default App
