import React from 'react'
import Spinner from './Spinner'
import  PersonajesItems  from './PersonajesItems'

export const PersonajesGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (

 <section className='cards'>
    {items.map((item) =>(
        <PersonajesItems key={item.key} item={item} />
    ))}
    </section>
  )
}

export default PersonajesGrid
