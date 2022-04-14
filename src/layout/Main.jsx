import React from "react";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    };

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=avengers`)
            .then((response) => response.json())
            .then((data) =>
                this.setState({ movies: data.Search, loading: false })
            );
    }

    handleUpdateMovies = (name, type = "all") => {
        this.setState({ loading: true });
        // fetch(
        //     `http://www.omdbapi.com/?apikey=c4047b88&s=${name}${
        //         type != "all" ? `&type=${type}` : ""
        //     }`
        // )
        //     .then((response) => response.json())
        //     .then((data) =>
        //         data.Response == "True"
        //             ? this.setState({ movies: data.Search, loading: false })
        //             : alert(data.Error)
        //     );
        fetch(
            `http://www.omdbapi.com/?apikey=${API_KEY}&s=${name}${
                type != "all" ? `&type=${type}` : ""
            }`
        )
            .then((response) => response.json())
            .then((data) =>
                this.setState({ movies: data.Search, loading: false })
            );
    };

    render() {
        const { movies, loading } = this.state;

        return (
            <main className="container_main content">
                <Search callback={this.handleUpdateMovies} />
                {loading ? <Preloader /> : <Movies movies={movies} />}
            </main>
        );
    }
}

export { Main };
