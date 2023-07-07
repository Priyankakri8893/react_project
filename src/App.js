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
  <div className="awesome" style={{ border: "1px solid red" }}>
    <h2>Enquiry</h2>
    <form>
      Name: <input type="text" name="" placeholder="Enter your name here" />
      <br />
      <br />
      Address: <textarea defaultValue={""} />
      <br />
      Gender: <input
        type="radio"
        defaultValue="m"
        name="gender"
        required=""
      />{" "}
      Male
      <input type="radio" defaultValue="f" name="gender" /> Female
      <br />
      <br />
      color: <input type="color" name="color" />
      <br />
      <br />
      Email: <input type="email" name="email" />
      <br />
      <br />
      password: <input type="password" name="password" />
      <br />
      <br />
      age: <input type="number" name="number" />
      <br />
      <br />
      skills: <input type="text" name="skill" />
      <br />
      <br />
      Country:
      <select>
        <option>Please select a country</option>
        <optgroup label="Asia">
          <option value="India">India</option>
          <option value="Shri">Shri lanka</option>
        </optgroup>
        <option value="Usa">USA</option>
      </select>
      <br />
      <br />
      Hobbies: <input type="checkbox" name="Hobbies" />
      Dancing
      <input type="checkbox" name="Hobbies" /> Singing
      <br />
      <br />
      Image
      <input type="file" name="image" />
      <br />
      <br />
      <input type="submit" defaultValue="Send" name="" />
      <input type="reset" defaultValue="Reset" name="" />
    </form>
  </div>
</>
   )
}





export default App;