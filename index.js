const express = require("express");
const app = express();
const port = 5001;

const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    colors: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    colors: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];

const getMovies = (req, res) => {
    res.status(200).json(movies);
};
app.get("/api/movies", getMovies);

const favouriteMovie = (req, res) => {
    res.send(`Welcome to my favourite movie list`);
}
app.get("/", favouriteMovie);


app.get("/api/movies/:id", (req, res)=> {
    const displayTitle = movies.find(c => c.id === parseInt(req.params.id));
    if (!displayTitle) res.status(404).send('Not found');
    res.send(displayTitle);
    }
);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});