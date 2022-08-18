import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import PetList from "../components/PetList";
import css from "../styles/Home.module.css";
import { GET_PETS } from '../queries/petQueries'
import { useQuery } from '@apollo/client'

const Home = () => {
  const [filter, setFilter] = useState(false);
  const [filterBtn, setFilterBtn] = useState(false);
  const [petData, setPetData] = useState(null);
  const [value, setValue] = useState("");
  const [formData, setFormData] = useState({});

  const {loading, error, data} = useQuery(GET_PETS);

    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>Something Went Wrong</h1>
    const pets = data.pets

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]:[e.target.value]})
  } 

  const handleFilter = (e) => {
    e.preventDefault();
    handleChange(e)
    const filteredData = pets.filter(pet => {
      return pet.Species === formData.Species[0] 
      && pet.Sex === formData.Gender[0] && pet.Size === formData.Size[0]
    })
    
  

    if(filteredData.length) {
      setPetData(filteredData)
    }else {
      setPetData(pets)
    }
    setFilter(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const filteredData = pets.filter(pet => {
      return pet.Name.toLowerCase().includes(value.toLowerCase())
   
    })
    if(filteredData.length) {
      setPetData(filteredData)
    }else {
      setPetData(pets)
    }
    setFilterBtn(true);
  };

  
 
  return (
    <>
      <div className={css.container}>
        <div className={css.welcome}>Find your pets!</div>
        <form onSubmit={handleSubmit} className={css.form}>
          <div className={css.formDiv}>
          <input
            type="search"
            name="search"
            id="search"
            className={css.search}
            placeholder="Search Cat, Dog, Small, Large etc."
            onChange={(e)=>{setValue(e.target.value)}}
          />
          <button className={css.btn} type="submit">
            <FaSearch />
          </button>
          </div>

          {filter && (
            <div className={css.filter}>
              <div className={css.species}>
              <label htmlFor="Species">SPECIES</label>
                <select className={css.select} name="Species" id="Species" onChange={handleChange}>
                  <option value="Any" >Any</option>
                  <option value="Cat">Cat</option>
                  <option value="Dog">Dog</option>
                </select>
              </div>
              <div className={css.size}>
              <label htmlFor="Size">SIZE </label>
                <select className={css.select}  name="Size" id="Size" onChange={handleChange}>
                  <option value="Any" >Any</option>
                  <option value="Small">Small</option>
                  <option value="Medium">Medium</option>
                  <option value="Large">Large</option>
                </select>
              </div>
              <div className={css.gender}>
              <label htmlFor="Gender">GENDER</label>
                <select className={css.select}  name="Gender" id="Gender" onChange={handleChange}>
                <option value="Any" >Any</option>
                  <option value="F">Female</option>
                  <option value="M">Male</option>
                </select>
              </div>
              <div className={css.color}>
              <label htmlFor="Color">COLOR</label>
                <select className={css.select}  name="Color" id="Color" onChange={handleChange}>
                <option value="Any" >Any</option>
                  <option value="Black">Black</option>
                  <option value="White">White</option>
                  <option value="Brown">Brown</option>
                  <option value="Tan">Tan</option>
                  <option value="Gray">Gray</option>
                </select>
              </div>
              <button onClick={handleFilter} className={css.applyFilterBtn}>Apply Filter</button>
            </div>
          )}
        </form>
        {filterBtn && (
          <div className={css.filterBy}>
            <button
              className={css.filterSearch}
              onClick={() => {
                setFilter(true);
              }}
            >
              Filter Search
            </button>
            {/* <input className={css.filterSearch} type="button" value="Sort By" /> */}
          </div>
        )}
        <div className={css.petList}>
          <PetList petData={petData}/>
        </div>
      </div>
    </>
  );
};

export default Home;
