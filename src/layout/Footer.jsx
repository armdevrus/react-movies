
function Footer (){
    return(
        <footer className="#80cbc4 teal lighten-3 page-footer">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a className="grey-text text-lighten-4 right" href="#!">Repo</a>
                </div>
            </div>
     </footer>
    )
}

export {Footer} 