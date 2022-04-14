import React from "react";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            type: "all",
        };
    }

    handlePressKey = (event) => {
        if (event.key === "Enter") {
            this.props.callback(this.state.search, this.state.type);
        }
    };

    handleSelectType = (event) => {
        this.setState(() => ({ [event.target.name]: event.target.value }), () => {
                this.props.callback(this.state.search, this.state.type);
            }
        );
    };

    render() {
        return (
            <div className="row">
                <div className="input-field col s12">
                    <input
                        className="validate"
                        placeholder="Search"
                        type="search"
                        value={this.state.search}
                        onChange={(event) =>
                            this.setState({ search: event.target.value })
                        }
                        onKeyDown={this.handlePressKey}
                    />
                    <button
                        className="btn search-btn"
                        onClick={() => this.props.callback(this.state.search, this.state.type)}
                    >
                        Search
                    </button>
                    <div className="container-radio">
                        <label>
                            <input
                                type="radio"
                                name="type"
                                onChange={this.handleSelectType}
                                value="all"
                                checked={this.state.type === "all"}
                            />
                            <span>All</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="type"
                                onChange={this.handleSelectType}
                                value="movie"
                                checked={this.state.type === "movie"}
                            />
                            <span>Movies only</span>
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="type"
                                onChange={this.handleSelectType}
                                value="series"
                                checked={this.state.type === "series"}
                            />
                            <span>Series only</span>
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}
export { Search };
