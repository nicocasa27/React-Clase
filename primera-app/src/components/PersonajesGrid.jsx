import React from 'react'
import Spinner from './Spinner'

export const PersonajesGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (

 <section className='cards'>
    {items.map((items) =>(
        <PersonajesItem key={items.key} item={items} />
    ))}
    </section>
  )
}

export default PersonajesGrid
