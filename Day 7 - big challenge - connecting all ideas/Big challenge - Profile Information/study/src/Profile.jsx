import { useState } from "react";

const Profile = () => {
      const style = {
    border: "2px solid black",
    marginTop: "10px",
    padding: "10px",
    width: "200px",
    marginRight:"20px"
  };

  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [selectedID, setSelectedID] = useState();
  const [information,setInformation] = useState([
    { id: 1, name: "Sami", age: 22 },
    { id: 2, name: "Adam", age: 17 },
    { id: 3, name: "Aya", age: 15 },
    { id: 4, name: "Aseel", age: 23 },
    { id: 5, name: "Mona", age: 50 },
  ]);

  function handleNameChange(e){
    setName(e.target.value);
  }
    function handleAgeChange(e){
    setAge(e.target.value);
  }

  function getId(id){
    setSelectedID(id);
    const user = information.find(info=>info.id==id);
    if(user){
        setName(user.name);
        setAge(user.age)
    }
  }

  function handleSubmit(e){
    e.preventDefault();
    const newInfo = information.map(info=>(
        info.id == selectedID ? {...info, name: name,age: age} : info
    ))
    setInformation(newInfo);
    setName("")
    setAge("")
    setSelectedID(null)
  }

  return (
    <div style={{display:"flex", justifyContent:"center"}}>
      <div>
        {information.map((info) => (
          <div style={style} key={info.id}>
            <p>Name: {info.name}</p>
            <p>Age: {info.age}</p>
            <button onClick={()=>getId(info.id)}>Update Info</button>
          </div>
        ))}
      </div>
      
      <div style={{display:"flex",alignItems:"center", }}>
        <form onSubmit={handleSubmit}>
            <label>Name: </label>
            <input type="text" value={name} onChange={handleNameChange}/>
            <br /><br />
            <label >Age: </label>
            <input type="number" value={age} onChange={handleAgeChange}/>
            <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};
export default Profile;
