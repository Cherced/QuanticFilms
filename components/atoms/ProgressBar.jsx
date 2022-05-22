import React, { useState }  from "react";

export const ProgressBar = ({ bar }) =>{
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
            <p className="title">Rank Movies Watched</p>
            <div className="progress">
                <div className="progress-bar" style={style}>           
                </div>      
            </div>
            <div>{ bar } / 100 </div>
            
        </div>
        
    )
}
