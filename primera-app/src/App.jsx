import React, {useState, useEffect} from 'react'
import Header from './components/Header'
import  PersonajesGrid from './components/PersonajesGrid'


const App = () => {

 const [items, setItems] = useState([])
 const [isLoading, setIsLoading] = useState(true)

 useEffect(() => {

  const fetchItems = async () => {
    try {
      const res = await fetch('/personajes.json')
      const data = await res.json()
      console.log(data)
      setItems(data)
    } finally {
      setIsLoading(false)
    }


  }


    fetchItems()

 },[])

  return (
    <div className='container' >
    <Header />
    <PersonajesGrid isLoading={isLoading} items={items} />
    </div>
  )
}

export default App  