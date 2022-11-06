import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOutletContext } from 'react-router-dom';
import Typography  from '@mui/material/Typography';
import Select from '@mui/material/Select';
import  Button  from '@mui/material/Button';




const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, firstName };

    fetch('https://battleclub.games:8000/blogs/', {
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
    <div className="create">
      <h2>Add a New Blog</h2>
      <form >
        <Typography>Jelentkezok:</Typography>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Typography variant="h3" color='error'>Jelentkez a versenyre:</Typography>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <Select
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        >
          <option value={user?.metadata?.firstName }>{user?.metadata?.firstName }</option>
          <option value="yoshi">yoshi</option>
        </Select>
        <Button onClick={handleSubmit}>Add Blog</Button>
      </form>
    </div>
  );
}
 
export default Create;