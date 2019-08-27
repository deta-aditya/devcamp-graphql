import { GraphQLInt, GraphQLString, GraphQLBoolean } from 'graphql';
import { PokemonType }  from '../../types/pokemon';
import { PokemonSearchType }  from '../../types/pokemonSearch';
import { getPokemonSearch, getPokemonSearchDetail } from '../../models/pokemon';

const GetPokemonSearch = {
  type: PokemonSearchType,
  args: {
    page: { type: GraphQLInt, defaultValue: 1 },
    perPage: { type: GraphQLInt, defaultValue: 10 },
    q: { type: GraphQLString },
  },
  resolve: getPokemonSearch
}

const GetPokemonSearchDetail = {
  type: PokemonType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: getPokemonSearchDetail
}

export { GetPokemonSearch, GetPokemonSearchDetail }