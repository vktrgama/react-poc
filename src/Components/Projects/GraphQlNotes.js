
import React from 'react';
import { NavLink } from "react-router-dom";

function GraphQlNotes() {
    const linkNotes = <NavLink style={{
        color: "blue"
      }} to="/notes">Notes</NavLink>;

    return (
        <>
            <h2 style={{fontSize: 30}} class="wow fadeInLeft">Implement AWS authentication and graphQL CRUD</h2>
            <h1 style={{textAlign:"center"}}>{linkNotes} app</h1>
            <span style={{visibility:'hidden'}}>(mike-2test@pp)</span>
        </>
    )
}

export default GraphQlNotes;