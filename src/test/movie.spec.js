import { assert } from 'chai'

describe("Movie class", function () {
    it('should be get average of movie', function() {
        const data = {
            "title": "Logan: The Wolverine",
            "year": "2017",
            "genres": ["Action", "Drama", "Sci-Fi"],
            "ratings": [
                10,
                9,
                7,
                2,
                2,
                5,
                1,
                3,
                9,
                10,
                2,
                4,
                10,
                9,
                6,
                9,
                6,
                4,
                10,
                1,
                9,
                5,
                2,
                6,
                8,
                3,
                10,
                9,
                4,
                8
            ],
            "poster": "MV5BMjI1MjkzMjczMV5BMl5BanBnXkFtZTgwNDk4NjYyMTI@._V1_SY500_CR0,0,338,500_AL_.jpg",
            "contentRating": "15",
            "duration": "PT137M",
            "releaseDate": "2017-03-01",
            "averageRating": 0,
            "originalTitle": "Logan",
            "storyline": "In the near future, a weary Logan cares for an ailing Professor X in a hide out on the Mexican border. But Logan's attempts to hide from the world and his legacy are up-ended when a young mutant arrives, being pursued by dark forces.                Written by\nTwentieth Century Fox Films",
            "actors": ["Hugh Jackman", "Patrick Stewart", "Dafne Keen"],
            "imdbRating": 9.5,
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjI1MjkzMjczMV5BMl5BanBnXkFtZTgwNDk4NjYyMTI@._V1_SY500_CR0,0,338,500_AL_.jpg"
        }
        const movie = new Movie(data);
        const avrgRt = movie.averageRating()
        assert.ok(avrgRt > 0 && avrgRt < 10)
    }),

    it('should be get zero of avg value', function() {
        const data = {
            "title": "Logan: The Wolverine",
            "year": "2017",
            "genres": ["Action", "Drama", "Sci-Fi"],
            "ratings": [
                -10,
                -9,
                -7,
                -2,
                -2,
                -5,
                -1,
                -3,
                -9,
                -10,
                -2,
                -4,
                -10,
                -9,
                -6,
                -9,
                -6,
                -4,
                -10,
                -1,
                -9,
                -5,
                -2,
                -6,
                -8,
                -3,
                -10,
                -9,
                -4,
                8
            ],
            "poster": "MV5BMjI1MjkzMjczMV5BMl5BanBnXkFtZTgwNDk4NjYyMTI@._V1_SY500_CR0,0,338,500_AL_.jpg",
            "contentRating": "15",
            "duration": "PT137M",
            "releaseDate": "2017-03-01",
            "averageRating": 0,
            "originalTitle": "Logan",
            "storyline": "In the near future, a weary Logan cares for an ailing Professor X in a hide out on the Mexican border. But Logan's attempts to hide from the world and his legacy are up-ended when a young mutant arrives, being pursued by dark forces.                Written by\nTwentieth Century Fox Films",
            "actors": ["Hugh Jackman", "Patrick Stewart", "Dafne Keen"],
            "imdbRating": 9.5,
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjI1MjkzMjczMV5BMl5BanBnXkFtZTgwNDk4NjYyMTI@._V1_SY500_CR0,0,338,500_AL_.jpg"
        }
        const movie = new Movie(data);
        const avrgRt = movie.averageRating()

        assert.equal(avrgRt, 0)
    })
})