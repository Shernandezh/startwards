import React from 'react'
import CardsApp from './CardsApp'
import galeria from '../assets/galeria'
import './CardApp.css'

const datainfo = [
    {
        id:1,
        titulo: 'Imperio galactico',
        img: galeria.imperio
    },

    {
        id:2,
        titulo: 'Resistencia',
        img: galeria.Resistencia
    },

    {
        id:3,
        titulo: 'jedi',
        img: galeria.jedi
    },

    {
        id:4,
        titulo: 'Separati',
        img: galeria.Separatis
    },
]

function CardsData() {
  return (
    <div>
        <div className='grupo'>
            {datainfo.map((Card)=>(
                <div className='card' key={Card.id}>
                    <CardsApp titulo={Card.titulo} img={Card.img}></CardsApp>
                </div>
            ))}
        </div>
    </div>
  )
}

export default CardsData