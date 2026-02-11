import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Header from './components/Header'

const App = () => {

 const [items, setItems] = useState([])
 const [isLoading, setIsLoading] = useState(true)

 useEffect(() => {

  const fetchItems = async () => {
    const resultado = await axios.get('./personajes.json')
    console.log(resultado.data)
    setItems(resultado.data)



  }


    fetchItems()

 },[])

  return (
    <div className='container' >
    <Header />
    </div>
  )
}

export default App  