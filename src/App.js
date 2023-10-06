import logo from './logo.svg';
import './App.css';
import {useState , useEffect } from "react";
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import { Route,Routes, Link, BrowserRouter as Router, NavLink, useNavigate,Navigate} from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import { Counter } from './Counter';
import {ColorBox} from "C:\\Users\\sanja\\Desktop\\aug\\movie\\my-app\\src\\ColorBox.js"
import TextField from '@mui/material/TextField';
import { Basicform } from './Basicform';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import axios from 'axios';
const Initial_Movie_List = [{

  name: "Vikram",
  poster:
  "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
  rating: 8.4,
  summary:
  "Members of a black ops team must track and eliminate a gang of masked murderers.",
  
  
  },
  {
  name: "RRR",
  poster:
  "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
  rating: 8.8,
  summary:
  "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
  
  },
  {
  name: "Iron man 2",
  poster:
  "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
  rating: 7,
  summary:
  "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
  
  },
  {
  name: "No Country for Old Men",
  poster:
  "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
  rating: 8.1,
  summary:
  "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
  
  },
  {
  name: "Jai Bhim",
  poster:
  "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
  summary:
  "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
  rating: 8.8,
  
  },
  {
  name: "The Avengers",
  rating: 8,
  summary:
  "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
  poster:
  "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
  
  },
  {
  name: "Interstellar",
  poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
  rating: 8.6,
  summary:
  "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
  
  },
  {
  name: "Baahubali",
  poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
  rating: 8,
  summary:
  "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
  
  },
  {
  name: "Ratatouille",
  poster:
  "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
  rating: 8,
  summary:
  "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
  
  }
  ];

function App() {

 const navigate = useNavigate();
 
  return (
    <div className="movie-list">
         <AppBar position="static">
        <Toolbar>

        <Button color="inherit" onClick={() => navigate("/")}> Home</Button>
        <Button color="inherit" onClick={() => navigate("/movie")}> Movies</Button>
        <Button color="inherit" onClick={() => navigate("/colorbox")}> ColorBox</Button>
        
          
        </Toolbar>
      </AppBar>





      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path ="/colorbox" element ={<ColorBox/>} />
        <Route path="/movie" element={<AddMovie />}/>
        <Route path="/form" element={<Basicform />} />
        <Route path="/hooks" element={<Hooks />} />

        {/* 404 error - mapping unused url to the component  */}
        <Route path="*" element={<Notfound />} />


        {/* rerouting */}

        <Route path="/colorgame" element={<Navigate replace to ="/colorbox" />} />
      </Routes>


      {/* <Movie /> */}
     {/* {movieList.map((item)=>  <Movie movie={item} />)} */}
     {/* <ColorBox /> */}
     {/* <AddMovie /> */}
     
    </div>
  );
}

function Movie({movie}){

  const [show,setShow]= useState(true);
 

  const summarystyles = {display: show ? "block" : "none"};
  const ratingstyles = {color:movie.rating > 8 ?"green" : "red "};

  //   const movie=  
  // {
  // name: "The Avengers",
  // rating: 8,
  // summary:
  // "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
  // poster:
  // "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
  
  // };


  return(
    
    <div className="movie-container">
       
      <img className="movie-poster"src={movie.poster} />


      <div className="movie-specs">
      <h2  className="movie-name">{movie.name}</h2>
      <p  className="movie-rating" style={ratingstyles}>{movie.rating}⭐</p>
      </div>
      {/* <button onClick={() => setShow(!show)}>Toggle Description</button> */}
     

      <IconButton color="primary"   onClick={() => setShow(!show)}>
      {/* <ExpandMoreIcon />  */}
      {show ?  <ExpandLessIcon />  : <ExpandMoreIcon />  }
      </IconButton>




      {/* <p  className="movie-summary" style ={summarystyles}>{movie.summary}</p> */}


      {/* conditional rendering */}
      {show ? <p  className="movie-summary" >{movie.summary}</p>  : ""}
       
   
      
      <Counter />
    </div>
  )
}


function AddMovie(){
  const[name,setName] = useState("");
  const[summary,setSummary] = useState("");
  const[rating,setRating] = useState("");
  const[poster,setPoster] = useState("");
  const[movieList,setMovieList] = useState(Initial_Movie_List )
  return(
    <div>
    <div className='add-movie'>
       <TextField id="standard-basic" label="Enter a movie name" variant="standard"  onChange={(event) => setName(event.target.value)}/> <br ></br>
       <TextField id="standard-basic" label="Enter a movie summary" variant="standard" onChange={(event) => setSummary(event.target.value)} /> <br ></br>
       <TextField id="standard-basic" label="Enter a movie poster URL" variant="standard" onChange={(event) => setPoster(event.target.value)}/> <br ></br>
       <TextField id="standard-basic" label="Enter a movie rating" variant="standard" onChange={(event) => setRating(event.target.value)} /> <br ></br>
      {/* <input placeholder='Enter a movie name'/>
      <input placeholder='Enter a movie summary'/>
      <input placeholder='Enter a movie poster url'/>
      <input placeholder='Enter a movie rating'/> */}
       
      {/* <button onClick={() => {
        const newMovie = {
          name:name,
          poster:poster,
          rating:rating,
          summary:summary
        }
        setMovieList([...movieList,newMovie])
      }} >Submit</button> */}



<Button variant="contained" onClick={() => {
        const newMovie = {
          name:name,
          poster:poster,
          rating:rating,
          summary:summary
        }
        setMovieList([...movieList,newMovie])
      }} >Submit</Button>


    </div>

    <div className='movie-list'>
        {movieList.map((item,index)=>  <Movie movie={item} key={index} />)}
    </div>

    </div>
  )
}


function Welcome(){
  return(
    <div>
      <h1>Welcome to the App</h1>
    </div>
  )
}

function Notfound(){
  return(
    <div className='nf'>
      <img src='https://freefrontend.com/assets/img/tailwind-404-page-templates/404-page-not-found.png' width="100%"></img>
    </div>
  )
}

// function Hooks(){
//   const [count, setCount] = useState(0);
//   const[counter,setCounter] = useState(0);


//   useEffect(() => {
//     setTimeout(() => {
//       setCount((count) => count + 1);
//     }, 1000);
//   },[counter]);
 

//   const decrement= () =>{
//     setCounter(counter-1);
//   }
  
//   return(
//     <div>
//       <h1> react hooks </h1>
//       <h1>I've rendered {count} times!</h1>

//       <button  onClick={decrement}>decrement{counter}</button>
//     </div>
//   )
// }

// function Hooks(){
//     const[comments,setComments] = useState([]);


//     useEffect(() => {
//       async function getComments() {
//         const commentsss = await  axios.get(
//           "https://jsonplaceholder.typicode.com/posts/1/comments"
//         );
//         setComments(commentsss)
//       }
//       getComments()
//     },[])


//     console.log(comments.data);
//   return(
//     <div>



//         {comments.map((comment) => (
//           <p> {comment.name} </p>
//         ))}
 
//     </div>
//   )
// }



function Hooks() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function getComments() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts/1/comments"
        );
        setComments(response.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    }

    getComments();
  }, []);

  return (
    <div>
      {comments.map((comment,index) => (
        <h2 key={index}>{comment.name}</h2>
      ))}
    </div>
  );
}

export default App;
