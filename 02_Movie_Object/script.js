class Movie {
    constructor(movie, genre, director, releaseYear, rating) {
        this._movie = movie;
        this._genre = genre;
        this._director = director;
        this._releaseYear = releaseYear;
        this._rating = rating;
    }

    getOverview() {
        return `${this._movie}, a ${this._genre} film directed by ${this._director} was released in ${this._releaseYear}. It received a rating of ${this._rating}.`;
    }
}