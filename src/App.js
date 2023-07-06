import "./App.css"

function App(){
   return(
      <>
      <Form/>
      </>
   )
}

function Form(){
   return(
      <>
         Name: <input type= "text"/>
         <br/>
         <br/>
         Address: <textarea></textarea>
         <br/>
         <br/>
         Gender: <input type="radio" value= "m" name="gender"/>Male
         <input type="radio" value= "f" name="gender"/>Female
         <br/>
         <br/>
         color: <input type="color" name="color"/>
         <br/>
         <br/>
         Email: <input type="email" name="email"/>
         <br/>
         <br/>
         password: <input type="password" name="password"/>
         <br/>
         <br/>
         age: <input type="number" name="number"/>
         <br/>
         <br/>
         skills: <input type="text" name="skill"/>
         <br/>
         <br/>
         <input type="reset" value="Reset"/>
         <br/>
         <input type="submit" value="send"/>
      </>
   )
}





export default App;