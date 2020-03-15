import React from "react";

function Navbar(props) {
    return (
        <header className="container-fluid fixed-top"  >
			
            <div className="row" >
                <h1 className="col-sm-8" >Game of thrones Game</h1>
                <nav className="navbar navbar-dark bg-primary">
                    <p>Score: <span>{props.currentScore}</span></p>
                    <p>Top Score: <span>{props.highScore}</span> </p>
                    {props.children}
                </nav>
            </div>
        </header>        
    )
}

export default Navbar;