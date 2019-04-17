import React from 'react';

function Widget(props){
  return(
    <div className="card m-2">
      <div className="card-header">
        {props.title}
      </div>
      
      <div className="card-body">     
        {props.children}
      </div>
    </div>
  );
}

export default Widget;