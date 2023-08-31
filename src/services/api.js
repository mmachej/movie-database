export const API_BASE_URL = 'https://api.themoviedb.org/3/'

const API_KEY = process.env.REACT_APP_THEMOVIEDB_API_KEY

export const getApiOptions = {
	method: 'GET',
	headers: {
	  accept: 'application/json',
	  Authorization: `Bearer ${API_KEY}`
	}
  };
