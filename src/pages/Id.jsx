import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_PET } from "../queries/petQueries";
import css from "../styles/Id.module.css";
import {FaArrowLeft} from "react-icons/fa"

const Id = () => {
  const { id } = useParams();
  const PetID = parseFloat(id)

  const { loading, error, data } = useQuery(GET_PET, {
    variables: { PetID },
  });


  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>Something Went Wrong</h1>;

  return <>
  <div className={css.container}>
    <img src={`/assets/${data.pet.Image}`} alt="image" />
    <div className={css.description}>
      <h1 className={css.name}>{data.pet.Name}</h1>
      <p>Age: {data.pet.Age}</p>
      <p>Sex: {data.pet.Sex}</p>
      <p>Breed: {data.pet.Breed}</p>
      <p>Size: {data.pet.Size}</p>
      <p>Description: {data.pet.Description}</p>
    </div>

    <button className={css.btn}>Start Adoptation Process</button>
    <a href="/">
    <button  className={css.arrowBtn}><FaArrowLeft/></button>
    </a>
  </div>

   
    </>
};

export default Id;
