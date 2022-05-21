import React, { useState }  from "react";

const ProgressBar = ( { bar }) =>{
    const [style, setStyle] = useState({});

    setTimeout(() =>{
        const newStyle = {
            opacity: 1,
            width: `${ bar }%`
        }
        setStyle(newStyle);
    }, 200);

    return(
        <div className="container-bar">
            <p className="title">Ghibli movies watched</p>
            <div className="progress">
                <div className="progress-bar" style={style}>           
                </div>      
            </div>
            <div>{ bar } / 24 </div>
            
        </div>
        
    )
}

export default ProgressBar;