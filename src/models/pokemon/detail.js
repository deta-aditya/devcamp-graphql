import axios from 'axios'
const default_data = {
    id: 0,
    name: "",
    base_experience: 0,
    height: 0,
    is_default: false,
    order: 0,
    weight: 0,
}

const detail = async (_, args) => {
  const { id } = args;
  const response = await axios.get(`http://pokeapi.co/api/v2/pokemon/${id}`)

  const dataFiltered = response.data || default_data

  return dataFiltered;
}

export default detail;