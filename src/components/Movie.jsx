function Movie(props) {
    return (
        <>
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    {
                        props.img == 'N/A' ?
                            <img src={`https://via.placeholder.com/300x400?text=${props.title}`} />
                            :
                            <img src={props.img} />
                    }
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{props.title}
                        <i className="material-icons right">{props.type}</i></span>
                    <p>{props.year}</p>
                </div>
            </div>
        </>
    )
}

export { Movie }