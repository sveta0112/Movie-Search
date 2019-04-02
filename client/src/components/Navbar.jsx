import React from 'react';



const Navbar = ({handleView}) => {
    return(
        <div>
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
        </div>
    );
}

export default Navbar;