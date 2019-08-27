import {
    GraphQLObjectType,
    GraphQLList,
    GraphQLBoolean,
    GraphQLInt,
  } from 'graphql';
  import { PokemonType } from './pokemon';
  
  const PokemonSearchType = new GraphQLObjectType({
    name: 'PokemonSearchType',
    fields: {
      pokemons: { type: new GraphQLList(PokemonType) },
      hasNextPage: { type: GraphQLBoolean },
      totalData: { type: GraphQLInt },
    }
  })
  
  export { PokemonSearchType }