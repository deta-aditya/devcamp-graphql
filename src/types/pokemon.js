import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLBoolean,
    GraphQLInt
} from 'graphql';
  
  const PokemonType = new GraphQLObjectType({
    name: 'PokemonType',
    fields: {
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        base_experience: { type: GraphQLInt },
        height: { type: GraphQLInt },
        is_default: { type: GraphQLBoolean },
        order: { type: GraphQLInt },
        weight: { type: GraphQLInt },
    }
  });
  
  export { PokemonType }