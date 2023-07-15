

function Test(){

  return(
    <>
    {/* if we use .css stylesheets , it create problem like this, means here i not import css stylesheets but css is apply here, so use .module.css file */}
    <h1 className='hi'>test CSS stylesheets</h1>  
    </>
  )
}

export default Test;