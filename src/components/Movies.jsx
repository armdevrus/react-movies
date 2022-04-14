import { Movie } from './Movie'

function Movies(props) {
    
    const { movies = [] } = props

    return (
        <>
            <div className="movies">
                {movies.length ? (
                    movies.map((elem) => (
                        <Movie
                            key={elem.imdbID}
                            img={elem.Poster}
                            title={elem.Title}
                            year={elem.Year}
                            type={elem.Type}
                        />
                    ))
                ) : (
                    
                        <h3>Nothing found</h3>
                    
                )}
            </div>
        </>
    );
}

export { Movies }