import React from "react";
import Action from "../redux/Action";
import { useNavigate } from "react-router-dom";
function Navbar(){
    const navigate = useNavigate();
    return(
        <div id="navbar">
        <img src="https://communicationmatters.at/wp-content/uploads/2015/10/Google-Logo.png" alt="Google Image" />
        <input type="text" placeholder="Search Google"/> 
        <button className="search" onClick={()=>{
            navigate("/Home")
            console.log(" Hey I'm Working");
            }}> Search </button>
        <button onClick={()=>{
            Action()
        }}> Sort A - Z </button>
        <button>
            Sort Z-A
        </button>
        <button>
            Sort By date(Asc)
        </button>
        <button>
            Sort By date(Asc)
        </button>
        <button>
            Sort By Quality(Asc)
        </button>
        <button>
            Sort By Quality(Dsc)
        </button>
        <button> Filter Explicit </button>
        </div>

    )
}

export default Navbar