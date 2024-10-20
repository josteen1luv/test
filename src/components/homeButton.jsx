import React from 'react';
import {Link} from "react-router-dom";

const HomeButton = () => {
    return (
        <div className="card">
            <Link to="/">
                <button style={{'position': 'absolute', top: '8px', left: '8px'}}>Home</button>
            </Link>

        </div>
    );
};

export default HomeButton;