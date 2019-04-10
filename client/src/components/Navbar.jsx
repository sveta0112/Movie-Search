import React from 'react';



const Navbar = ({handleView}) => {
    return(
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#"><i className="fas fa-video"></i>  Movie Search</a>
                </div>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className=" nav navbar-nav navbar-right">
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => handleView("default")}>Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => handleView("myList")}>Your List</a>
                        </li>
                    </ul>
                </div>
              </div>
        </nav>
    );
}

export default Navbar;


{/* <div>
            <table className="title">
                <tbody>
                    <tr>
                        <td>
                           <img alt="find-green icon" src="green_app_icon.svg" width="50"/>
                        </td>
                        <td width="10"></td>
                        <td>
                           <h1>Movie Search</h1>
                        </td>
                        <td width="65%"></td>
                        <td>
                            <a onClick={() => handleView("default")}><h3>Home</h3></a>
                        </td>
                        <td width="10"></td>
                        <td>
                           <a onClick={() => handleView("myList")}><h3>Your List</h3></a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div> */}