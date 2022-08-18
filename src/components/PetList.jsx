import React from "react";
import Pet from "./Pet";
import css from "../styles/PetList.module.css";
// import {pets} from '../sampleData'
import { GET_PETS } from "../queries/petQueries";
import { useQuery } from "@apollo/client";

const PetList = ({ petData }) => {
  const { loading, error, data } = useQuery(GET_PETS);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Something Went Wrong</h1>;
  const pets = data.pets;

  return (
    <div className={css.containerBox}>
      {petData
        ? petData.map((pet) => {
            return <Pet key={pet.PetID} pet={pet} />;
          })
        : pets.map((pet) => {
            return <Pet key={pet.PetID} pet={pet} />;
          })}
    </div>
  );
};

export default PetList;
