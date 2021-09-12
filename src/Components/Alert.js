import React from 'react'

function Alert(props){

const capitalised = (words)=>{
    const lower=words.toLowerCase();

    return lower.charAt(0).toUpperCase() + lower.slice(1);
}

    return(
   
    props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
<strong>{capitalised(props.alert.Type)} </strong>{props.alert.msg}
</div> 
)

}

export default Alert
