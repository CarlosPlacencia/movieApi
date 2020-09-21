# movieApi

The movieApi allows you to retrieve movies stored in a NoSQL database. The data comes from [Kaggle](https://www.kaggle.com/tmdb/tmdb-movie-metadata?select=tmdb_5000_movies.csv) 

## How is the data structured? 

```JSON
   {
        "title": "Avatar",
        "summary": "In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.",
        "popularity": 150.437577,
        "releaseDate": "2009-12-10",
        "runtime": 162,
        "voteAverage": 7.2
    }

```

# How does it work?

Make a **GET**  request to */api/movies* and you’ll get back the first 9 items sorted by *popularity* in *descending* order.

``` JSON
{
  "results": {
    "next": {
      "page": 2,
      "limit": 9
    },
    "results": [
      {
        "_id": "5f5ff3087ea96f700cdec64f",
        "title": "Minions",
        "summary": "Minions Stuart, Kevin and Bob are recruited by Scarlet Overkill, a super-villain who, alongside her inventor husband Herb, hatches a plot to take over the world.",
        "popularity": 875.581305,
        "releaseDate": "2015-06-17T00:00:00.000Z",
        "runtime": 91,
        "voteAverage": 6.4,
        "__v": 0
      },
      {
        "_id": "5f5ff3087ea96f700cdec48c",
        "title": "Interstellar",
        "summary": "Interstellar chronicles the adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
        "popularity": 724.247784,
        "releaseDate": "2014-11-05T00:00:00.000Z",
        "runtime": 169,
        "voteAverage": 8.1,
        "__v": 0
      },
      {
        "_id": "5f5ff3097ea96f700cdec741",
        "title": "Deadpool",
        "summary": "Deadpool tells the origin story of former Special Forces operative turned mercenary Wade Wilson, who after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life.",
        "popularity": 514.569956,
        "releaseDate": "2016-02-09T00:00:00.000Z",
        "runtime": 108,
        "voteAverage": 7.4,
        "__v": 0
      },
      {
        "_id": "5f5ff3087ea96f700cdec48b",
        "title": "Guardians of the Galaxy",
        "summary": "Light years from Earth, 26 years after being abducted, Peter Quill finds himself the prime target of a manhunt after discovering an orb wanted by Ronan the Accuser.",
        "popularity": 481.098624,
        "releaseDate": "2014-07-30T00:00:00.000Z",
        "runtime": 121,
        "voteAverage": 7.9,
        "__v": 0
      },
      {
        "_id": "5f5ff3087ea96f700cdec4ac",
        "title": "Mad Max: Fury Road",
        "summary": "An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order. There's Max, a man of action and a man of few words, who seeks peace of mind following the loss of his wife and child in the aftermath of the chaos. And Furiosa, a woman of action and a woman who believes her path to survival may be achieved if she can make it across the desert back to her childhood homeland.",
        "popularity": 434.278564,
        "releaseDate": "2015-05-13T00:00:00.000Z",
        "runtime": 120,
        "voteAverage": 7.2,
        "__v": 0
      },
      {
        "_id": "5f5ff3087ea96f700cdec449",
        "title": "Jurassic World",
        "summary": "Twenty-two years after the events of Jurassic Park, Isla Nublar now features a fully functioning dinosaur theme park, Jurassic World, as originally envisioned by John Hammond.",
        "popularity": 418.708552,
        "releaseDate": "2015-06-09T00:00:00.000Z",
        "runtime": 124,
        "voteAverage": 6.5,
        "__v": 0
      },
      {
        "_id": "5f5ff3087ea96f700cdec4f4",
        "title": "Pirates of the Caribbean: The Curse of the Black Pearl",
        "summary": "Jack Sparrow, a freewheeling 17th-century pirate who roams the Caribbean Sea, butts heads with a rival pirate bent on pillaging the village of Port Royal. When the governor's daughter is kidnapped, Sparrow decides to help the girl's love save her. But their seafaring mission is hardly simple.",
        "popularity": 271.972889,
        "releaseDate": "2003-07-09T00:00:00.000Z",
        "runtime": 143,
        "voteAverage": 7.5,
        "__v": 0
      },
      {
        "_id": "5f5ff3087ea96f700cdec47f",
        "title": "Dawn of the Planet of the Apes",
        "summary": "A group of scientists in San Francisco struggle to stay alive in the aftermath of a plague that is wiping out humanity, while Caesar tries to maintain dominance over his community of intelligent apes.",
        "popularity": 243.791743,
        "releaseDate": "2014-06-26T00:00:00.000Z",
        "runtime": 130,
        "voteAverage": 7.3,
        "__v": 0
      },
      {
        "_id": "5f5ff3087ea96f700cdec4f5",
        "title": "The Hunger Games: Mockingjay - Part 1",
        "summary": "Katniss Everdeen reluctantly becomes the symbol of a mass rebellion against the autocratic Capitol.",
        "popularity": 206.227151,
        "releaseDate": "2014-11-18T00:00:00.000Z",
        "runtime": 123,
        "voteAverage": 6.6,
        "__v": 0
      }
    ]
  }
}

```

## Query parameters

* “title” 
* “sort”:
  * Will sort the data in **ascending** or **descending** order. You can sort by **title**, **popularity**, **releaseDate** or **runtime**.
  * **default**: popularity:desc
  * example: sort=title:asc
* “limit”
  * Determines how many items will be sent back.
  * **default**: 9
* “page”
  * **default**: 1
  
## Example of making a GET request to the API

*http://localhost:PORT/api/movies?title=steel&sort=releaseDate%3Adesc&page=1&limit=3*

``` JSON
{
  "results": {
    "next": {
      "page": 2,
      "limit": 3
    },
    "results": [
      {
        "_id": "5f5ff3087ea96f700cdec43b",
        "title": "Man of Steel",
        "summary": "A young boy learns that he has extraordinary powers and is not of this earth. As a young man, he journeys to discover where he came from and what he was sent here to do. But the hero in him must emerge if he is to save the world from annihilation and become the symbol of hope for all mankind.",
        "popularity": 99.398009,
        "releaseDate": "2013-06-12T00:00:00.000Z",
        "runtime": 143,
        "voteAverage": 6.5,
        "__v": 0
      },
      {
        "_id": "5f5ff30b7ea96f700cded6c2",
        "title": "Bending Steel",
        "summary": "The Cyclone, The Freakshow, The Mermaid Parade: all Coney Island icons. But Chris “Wonder” Schoeck has always preferred the Coney Island Strongman. Bending Steel follows the sweet, unassuming Schoeck as he parlays his extraordinary strength into the pursuit of his lifelong dream. Training with an elite group of men whose hands bend, drag, twist and shred metal, he tackles an enormous physical and mental challenge, taking a surprisingly emotional journey as a result.",
        "popularity": 0.048726,
        "releaseDate": "2013-04-20T00:00:00.000Z",
        "runtime": 93,
        "voteAverage": 5,
        "__v": 0
      },
      {
        "_id": "5f5ff3087ea96f700cdec52e",
        "title": "Real Steel",
        "summary": "In the near-future, Charlie Kenton is a washed-up fighter who retired from the ring when robots took over the sport. After Charlie's robot is trashed, he reluctantly teams up with his estranged son Max to rebuild and train an unlikely contender.",
        "popularity": 37.195046,
        "releaseDate": "2011-09-28T00:00:00.000Z",
        "runtime": 127,
        "voteAverage": 6.6,
        "__v": 0
      }
    ]
  }
}
```

## Get the API running

* Make sure you have Node.js and MongoDB installed.
* Clone the repository **https://github.com/CarlosPlacencia/movieApi.git**
* Run **npm install**
* Create a dotenv file
    ```
    NODE_ENV=develoment

    PORT= // Add any port
    DATABASE_URL=mongodb://localhost/movieApi
    ```
* Run **npm populate** to populate the database
* Run **npm start** to run the API





