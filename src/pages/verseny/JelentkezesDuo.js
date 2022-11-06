import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOutletContext } from 'react-router-dom';
import  Button  from '@mui/material/Button';
import Typography  from '@mui/material/Typography';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import HomeDuo from './HomeDuo';

const Create = () => {
 

  
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { firstName};

    fetch('https://battleclub.games:8000/duo/', {
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
        direction="row-reverse" spacing={2}
        justifyContent="center">
         
        
         <Button size="large" variant="contained" color='error' onClick={handleSubmit}>Jelentkezem</Button>
        
         
         <Typography variant="h3" color='error'>Jelentkezz a Duo versenyre:</Typography>
           
    
         <Select
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)} >
          <option value={user?.metadata?.firstName }>{user?.metadata?.firstName }</option>

         </Select>

         
         <HomeDuo/>

         </Stack>
    </div>
  );
}
 
export default Create;