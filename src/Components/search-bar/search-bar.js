import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { API_BASE_URL, getApiOptions } from "../../services/api";

const SearchBar = ({onSearchChange}) =>{

    const [search, setSearch] = useState(null);

    const loadOptions = (inputValue) => {
        return fetch(
            `${API_BASE_URL}search/movie?query=${inputValue}&include_adult=false&language=en-US&page=1`,
            getApiOptions
        )
        .then((response) => response.json())  
        .then((response) => {
            return {
              options: response.results.map((movie) => {               
                return {
                  value: `${movie.id}` ,
                  label: `${movie.title} (${movie.release_date.slice(0, 4)})`,
                };
              }),
            };
          })
        .catch(err => console.error(err))
        };
    

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        console.log(search)
        onSearchChange(searchData.value);
    };

    return (
        <AsyncPaginate 
            placeholder="Search for movie"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
            
        />
    )

};

export default SearchBar;