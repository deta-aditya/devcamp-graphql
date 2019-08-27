import axios from 'axios'

const list = async (_, args) => {
  const { page, perPage, q } = args;

  const response = await axios.get('http://pokeapi.co/api/v2/pokemon')
  const listItem = response.data.results

  console.log(listItem)
  // Search simple string
  const dataFiltered = listItem.filter(item => item.name.toLowerCase().includes(q.toLowerCase()));
  
  // Pagination 
  const result = paginate(dataFiltered, perPage, page)
  const totalItems = dataFiltered.length
  const totalPages = Math.ceil(totalItems / perPage);

  return {
    pokemons: result.sort(compareSort),
    hasNextPage: page < totalPages,
    totalData: result.length
  }
}

const paginate = (items, perPage, page) => {
  return items.slice((page - 1) * perPage, (page) * perPage);
}

const compareSort = (a, b) => {
  const last = a.id
  const next = b.id

  return last > next;
}

export default list;