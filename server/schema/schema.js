const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLFloat,
} = require("graphql");
const { pets } = require("../sampleData.js");

const PetType = new GraphQLObjectType({
  name: "Pet",
  fields: () => ({
    PetID: { type: GraphQLFloat },
    Name: { type: GraphQLString },
    Species: { type: GraphQLString },
    Breed: { type: GraphQLString },
    Sex: { type: GraphQLString },
    Age: { type: GraphQLFloat },
    Size: { type: GraphQLString },
    Colour: { type: GraphQLString },
    Description: { type: GraphQLString },
    Image: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    pets: {
      type: new GraphQLList(PetType),
      resolve() {
        return pets
      }
    },
    pet: {
      type: PetType,
      args: {PetID: {type: GraphQLFloat}},
      resolve(parent, args){
        return pets.find(pet => pet.PetID === args.PetID)
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
});
