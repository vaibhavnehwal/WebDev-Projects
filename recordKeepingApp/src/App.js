import "./App.css";
import Header from "./components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";


function App() {
  const [form, setForm] = useState({});
  const [data, setData] = useState([]);
  
  const addData= () => {
    setData([...data, form])
    setForm({form});
  }
  
  const removeItem =(index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  }
  
  return (
  
    <div className="App">
      <Header />

      <div className="form">
        <Stack spacing={2} direction="row">
          <TextField
            value={form.name}
            onChange={(event) => setForm({...form, name: event.target.value})}
            id="outlined-basic"
            label="name"
            variant="outlined"
          />
          <TextField
            value={form.email}
            onChange={(event) => setForm({...form, email: event.target.value})}
            id="outlined-basic"
            label="email"
            variant="outlined"
          />
          <Button onClick={addData} color="success" variant="contained">
            <AddIcon/>
          </Button>
        </Stack>
      </div>


      {/* Data */}
      <div className="data">
        <div className="data_val">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {
        data.map((element, index) => {
           return(
          <div key={index} className="data_val">
              <h4>{element.name}</h4>
              <h4>{element.email}</h4>
              <stack>
              <Button onClick={() => removeItem()} variant="contained" color="error">
                <DeleteIcon />
              </Button>
              </stack>
          </div>
           )
        }) 
           }
      </div>
    </div>
  );
}

export default App;
