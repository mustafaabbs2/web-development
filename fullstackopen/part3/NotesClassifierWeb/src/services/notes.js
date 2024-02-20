import axios from 'axios'

// const baseUrl = '/api/notes' //if you're copying over to the backend.. 
// Check REST - for the backend server
const baseUrl = 'http://localhost:3001/api/notes' //-> if youre developing locally

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

export default { 
  getAll, 
  create, 
  update 
}

//This is exporting the functions above