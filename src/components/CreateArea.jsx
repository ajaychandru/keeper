import AddIcon from '@mui/icons-material/Add';
import { Fab } from '@mui/material';
import Zoom from '@mui/material/Zoom';
import React, { useState } from "react";

function CreateArea(props) {
  
  const [show,setShow]=useState(false);

   const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    setShow(false);
    event.preventDefault();
  }
  function showInput(){
      setShow(true)
  }

  return (
    <div>
      <form  className="create-note">
       
        <input style={show?{display:"block"}:{display:"none"}}
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        
    
     <textarea  onClick={showInput}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={show?3:1}
        />

    
      
      <Zoom  style={show?{display:"block"}:{display:"none"}} in={show?true:false} ><Fab onClick={submitNote}  aria-label="add">
          <AddIcon />
        </Fab></Zoom>
        
      
       
    
      </form>
    </div>
  );
}

export default CreateArea;
