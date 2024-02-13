import React from 'react'
import Back from '../components/buttons/back/Back'
import Carousel from '../components/carousel/Carousel'
import { FirstList } from '../data/First'

export const One = () => {
  return (
    <div className='container'>
        <Back/>
        <Carousel flashcardList={FirstList}/>

    </div>
  )
}
