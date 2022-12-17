import React, {useState} from "react";
import axios from "axios";
import Image from 'react-bootstrap/Image';
import Cover from './media/poster.png';
import '../App.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Nopic from './media/nopic.png';


const movieUrl = 'https://api.themoviedb.org/3/search/movie?api_key=cec31476a7aed22c05d209d1f5bd7fe4&query=';


export default function Fetching(){

    const [movie, setMovie] = useState();
    const [result, setResult] = useState();
    
   

    function handleChange(event) {  
        const movie = event.target.value;  
        setMovie(movie);  
    }  

    const handleSubmit = async (event) => {  
        event.preventDefault();
        const answer = await axios.get(
            movieUrl+movie
          );
          const result = answer.data.results;  
          setResult(result);
          console.log(result)
   };

 
  return(
        <>
          <div className="fetching">
          <form onSubmit={handleSubmit}>  
            <div className="main-search">  
                <div className="row">  
                    <div>  
                        <input 
                        onChange={handleChange} 
                        placeholder="Movie title" 
                        title="Movie title"
                        type="text"
                        className="input"
                        pattern=".{4,}"
                        />  
                    </div>  
                    <br/><br/>
                    <div className="ml-auto">  
                        <input 
                        style={{marginTop: '2%'}}
                        type="submit" 
                        value="Search" 
                        className="butt"
                        />  
                    </div>  
                </div>  
            </div>
        </form> 
          </div>
          <div className="row m-3" style={{marging: '2%'}}>
          { result?.map((movie) => (
            <div className="col p-3" key={movie.id}>
                <div className="box">
                    <Image height='220' width='170' className="rounded mx-auto d-block" src={
                        'https://image.tmdb.org/t/p/original/'+ movie.poster_path !== 'https://image.tmdb.org/t/p/original/null' ? 'https://image.tmdb.org/t/p/original/'+ movie.poster_path : Cover
                    }                    
                    />
                    <br/><br/>
                    <h2>{movie.title}</h2>
                    <p>Release Date: {movie.release_date}</p>
                    <div>
                         <OverlayTrigger 
                            className='align-self-end position relative'
                            trigger="click"
                            key={movie.id}
                            overlay={
                            <Popover>
                                <Popover.Header style={{textAlign: 'center'}} as="h3">
                                <Image fluid src={ 'https://image.tmdb.org/t/p/original/'+movie.backdrop_path !== 'https://image.tmdb.org/t/p/original/null' ? 'https://image.tmdb.org/t/p/original/'+movie.backdrop_path : Nopic
                                    }
                                    />
                                    <br/><br/>
                                    {movie.original_title}</Popover.Header>
                                <Popover.Body>
                                    
                                   <span> 
                                        <strong>Vote average:</strong> {movie.vote_average} 
                                    </span>
                                   <br/>
                                   <span>
                                        <strong> {movie.adult === true ? '+18' : 'Not adult movie'} 
                                        </strong>
                                   </span>
                                   <br/>
                                   <br/>
                                   <span>
                                        <strong> {
                                         movie.genre_ids[0] === 28 ? 'Action' 
                                                           : 12 ? 'Adventure'
                                                           : 16 ? 'Animation'
                                                           : 35 ? 'Comedy'
                                                           : 80 ? 'Crime'
                                                           : 99 ? 'Documentary'
                                                           : 18 ? 'Drama'
                                                           : 10751 ? 'Family'
                                                           : 14 ? 'Fantasy'
                                                           : 36 ? 'History'
                                                           : 27 ? 'Horror'
                                                           : 10402 ? 'Music'
                                                           : 9648 ? 'Mystery'
                                                           : 10749 ? 'Romance'
                                                           : 878 ? 'Science Fiction'
                                                           : 10770 ? 'TV Movie'
                                                           : 53 ? 'Thriller'
                                                           : 10752 ? 'War'
                                                           : 37 ? 'Western'
                                                           
                                                          : 'No genre'          
                                            }
                                        </strong>
                                   </span>
                                       <br/>
                                       <span>
                                           <strong>Overview: </strong> 
                                           {movie.overview}
                                        </span>   
                                    </Popover.Body>
                            </Popover>
                            }
                        >
                              <button  className='butt justify-content-end'>More</button>
                        </OverlayTrigger>
                    </div> 
                </div>   
            </div>
          ))}
        </div>
        </>
    )
}