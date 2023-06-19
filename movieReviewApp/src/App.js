import './App.css';
import Header from './components/Header.js';
import Movie from './components/Movie';
import movies from './Movie.json'


function App() {
  return (
    <div className = "App">
     <Header/>
     <div className= 'main'>
      {
        movies.map((element, index) =>{
          return(
          <Movie 
           key = {index}
           title={element.Title}
           year={element.Year} 
           img={element.Poster}  
           />
          )
        })
      }
     </div>
     
    </div>
    
   
  );
}

export default App;


