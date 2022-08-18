import { gql } from "@apollo/client";

const GET_PETS = gql `
  query getPets{
    pets{
      PetID
      Name
      Species
      Breed
      Sex
      Age
      Size
      Colour
      Description
      Image
    }
  }
`

const GET_PET = gql `
  query getPet($PetID: Float!){
    pet(PetID: $PetID){
      PetID
      Name
      Species
      Breed
      Sex
      Age
      Size
      Colour
      Description
      Image
    }
  }
`
export {GET_PETS, GET_PET}