import React from 'react';


function Student(props){
        return (
            <div>
            <h1>{props.name} Score {Math.random()*100} Marks</h1>
            <p>{props.children}</p>
            </div>


        );
}

export default Student;