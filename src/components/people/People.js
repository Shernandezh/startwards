import React, { useEffect } from 'react'
import {usePerson} from '../Hooks/usePerson.js'

export const personajes = () => {
    const {getAllPeople} = usePerson();
      useEffect(() => {
        getAllPeople();
        console.log(getAllPeople);
      },[]);

  return (
    <div>personajes</div>
  )
}
