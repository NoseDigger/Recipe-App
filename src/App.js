import React,{useEffect,useState} from 'react';
import './App.css';
import Recipe from './Recipe';

function App() {
  const [recipes,setRecipes]=useState([]);
  const [search,setSearch]=useState('');
  const [query,setQuery]=useState('chicken')
  const App_Id='46cee830';
  const App_Key='3cb0952eca65d0e21ea194baf4e46914';
 
  useEffect(()=>{
    getRecipes();

  },[query]);

  const getRecipes= async ()=>{
    const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_Id}&app_key=${App_Key}`);
    const data=await response.json();
    setRecipes(data.hits);
    console.log(data.hits);

    
  }

  const updateSearch=(event)=>{
    setSearch(event.target.value);
  }

  const getSearch=(event)=>{
    event.preventDefault();
    setQuery(search);
    setSearch('');

  }


  return (
    <div className="App">
    <form onSubmit={getSearch} className='search-form'>
      <input className='search-bar' type='text' placeholder='Search for your item' value={search} onChange={updateSearch}/>
      <button className='search-button' type='submit'>Search</button>
    </form>
    <div className='recipes'>
    {recipes.map(recipe=>(
      <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} images={recipe.recipe.image} ingredients={recipe.recipe.ingredients} />
    ))}
    </div>
    
    </div>
  );
}

export default App;
