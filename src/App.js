import React, {useState, useEffect} from 'react';
import './App.css';
import Recipe from './Recipe';


const App = () => {
  const APP_ID = "b31f6c0d";
  const APP_KEY = "c320e9fdc7afef18641c5af4cc368c31";
  

  const [recipes, setrecipes] = useState([]);
  const [search, setsearch] = useState("");
  const [query, setquery] = useState("chocolate");

  useEffect(() => {
    getRecipes();
  }, [query]);  

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setrecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = e => {
    setsearch(e.target.value);
    console.log(search);

  }

  const getSearch = e => {
    e.preventDefault();
    setquery(search);
    setsearch("");
  }

  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button type="submit" className="submit-button">Search</button>
      </form>      
    {recipes.map(recipe =>( 
        <div className="container">
        <Recipe key={recipe.recipe.label} title={recipe.recipe.label} ingredients={recipe.recipe.ingredients} img={recipe.recipe.image} calories={recipe.recipe.calories}/>
        </div>
      ))}
    
    </div>
    )
  };




export default App;
