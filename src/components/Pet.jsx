import React from 'react'
import { useNavigate } from 'react-router-dom'
import css from '../styles/PetList.module.css'



const Pet = ({pet}) => {
  const navigate = useNavigate();
  return (
   <div className={css.container} onClick={()=>navigate(`/pet/${pet.PetID}`)}>
    <img src={`assets/${pet.Image}`} alt="petImage"  />
    <div className={css.desc}>
    <span className={css.name}>
      Name: {pet.Name}
    </span>
    <span className={css.age}>
      Age: {pet.Age}
    </span>
    </div>
   </div>
  )
}

export default Pet