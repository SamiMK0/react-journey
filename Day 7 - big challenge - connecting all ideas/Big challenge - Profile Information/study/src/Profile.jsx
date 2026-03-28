import { useState } from "react";

const Profile = () => {
  const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "40px",
  padding: "40px",
  fontFamily: "Arial, sans-serif"
};
const cardStyle = {
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  padding: "15px",
  width: "220px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  marginBottom: "15px"
};
const buttonStyle = {
  padding: "6px 10px",
  marginRight: "8px",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer"
};

const updateBtn = {
  ...buttonStyle,
  backgroundColor: "#4CAF50",
  color: "white"
};

const deleteBtn = {
  ...buttonStyle,
  backgroundColor: "#f44336",
  color: "white"
};

const formStyle = {
  backgroundColor: "#ffffff",
  padding: "25px",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  width: "250px"
};

const inputStyle = {
  width: "100%",
  padding: "8px",
  marginTop: "5px",
  marginBottom: "15px",
  borderRadius: "6px",
  border: "1px solid #ccc"
};
const addBtn = {
  ...buttonStyle,
  backgroundColor: "#2196F3",
  color: "white",
  width: "100%",
  marginBottom: "10px"
};

const saveBtn = {
  ...buttonStyle,
  backgroundColor: "#FF9800",
  color: "white",
  width: "100%"
};

const listStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  maxWidth: "600px"
};

  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [selectedID, setSelectedID] = useState();
  const [information,setInformation] = useState([
    // { id: 1, name: "Sami", age: 22 },
    // { id: 2, name: "Adam", age: 17 },
    // { id: 3, name: "Aya", age: 15 },
    // { id: 4, name: "Aseel", age: 23 },
    // { id: 5, name: "Mona", age: 50 },
  ]);

  function handleNameChange(e){
    setName(e.target.value);
  }
    function handleAgeChange(e){
    setAge(e.target.value);
  }

  function selectProfile(id){
    setSelectedID(id);
    const user = information.find(info=>info.id==id);
    if(user){
        setName(user.name);
        setAge(user.age)
    }
  }

  function update(e){
    e.preventDefault();
    const newInfo = information.map(info=>(
        info.id == selectedID ? {...info, name: name,age: age} : info
    ))
    setInformation(newInfo);
    setName("")
    setAge("")
    setSelectedID(null)
  }

  function add(e){
    e.preventDefault();
    const newUser = {
      id:Date.now(),
      name:name,
      age:age
    }
    setInformation([...information,newUser]);
    setName("")
    setAge("")
  }
  function handleDelete(id){
    const deletedProfile = information.filter(info => info.id!=id);
    setInformation(deletedProfile);
  }

  return (
    <div style={containerStyle}>
      <div style={listStyle}>
        {information.map((info) => (
          <div style={cardStyle} key={info.id}>
            <p>Name: {info.name}</p>
            <p>Age: {info.age}</p>
            <button style={updateBtn} onClick={()=>selectProfile(info.id)}>Update Info</button>
            <button style={deleteBtn} onClick={()=> handleDelete(info.id)}>Delete</button>
          </div>
        ))}
      </div>
      
      <div style={formStyle}>
        <form >
            <label>Name: </label>
            <input type="text" value={name} onChange={handleNameChange} style={inputStyle}/>
            <br /><br />
            <label >Age: </label>
            <input type="number" value={age} onChange={handleAgeChange} style={inputStyle}/>
            <button onClick={add} style={addBtn}>Add</button>
            <button onClick={update} style={saveBtn}>Save</button>
        </form>
      </div>
    </div>
  );
};
export default Profile;
