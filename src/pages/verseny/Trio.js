import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOutletContext } from 'react-router-dom';
import  Button  from '@mui/material/Button';
import Typography  from '@mui/material/Typography';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
const Create = () => {
 

  
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { firstName };

    fetch('https://battleclub.games:8000/trio/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      // history.go(-1);
      navigate.push('/');
    })
  }

  const { user } = useOutletContext();

  const [firstName, setFirstName] = useState(user?.metadata?.firstName ?? '');


  return (
    <div>
      <Stack
        divider={<Divider orientation="vertical" color="error" flexItem />} 
        direction="row-reverse" spacing={6}
        justifyContent="center">


            
        <Select
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        >
          <option value={user?.metadata?.firstName }>{user?.metadata?.firstName }</option>
        </Select>
        
        <Button onClick={handleSubmit}>Jelentkezem</Button>


         <Typography variant="h3" color='error'>Jelentkez a versenyre:</Typography>
         <form onSubmit={handleSubmit}>
    
        
        
      </form>
      </Stack>
    </div>
  );
}
 
export default Create;