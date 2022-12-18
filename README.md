# The React Find Movie app 
18 December 2022
The deployed web app is on [link](http://brief-paint.surge.sh/)

## OBJECTIVE
The web-app is on React.js. It uses the [TMDB API](https://developers.themoviedb.org/3) to find the movie by the word in the title. The app uses Bootstrap for styling and creating **Popovers** and Axios as the HTTP-client.

## BACKGROUND
The Movie Finder searchs for the basic movie information by the word in the title in the TMDB data. It provides the Poster Image, the Title, the Release date, in the PopOver there are: Capture image, Vote average,the Movie Genre and the Overview. 


## TECHNICAL DESIGN
The app uses:

- React;
- Bootstrap;
- TMDB API;
- Axios;


The app uses the **{useState}** for the changing the state to search the movie. **Array.map()** spreadly used to get the necessary information from the data. **If else** also spreadly used for showing the template image if there the data is **null** and to get the information about the Movie genres.
Bootstrap **Popover** is used to provide more information about movie and hide the diffrence between the possible **box** height.

## CAVEATS
There is no box height unification.
