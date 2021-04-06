import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { Zoom } from "@material-ui/core";

function CreateArea(props) {
    const [isExpanded , setExpanded]= useState(false);
    function expand(){
        setExpanded(true);
    }
    const [newNote, setNewNote] = useState({
        title: "",
        content: "",
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setNewNote(prevNote => ({ ...prevNote, [name]: value }))
    }

    function submitNote(event) {
        props.add(newNote);
        setNewNote({
            title: "",
            content: ""
        });
        event.preventDefault();

    }

    return <div>

        <form className="create-note">
            {isExpanded ? <input type="text" name="title" onChange={handleChange} value={newNote.title} placeholder="Title" /> : null}
            
            <textarea name="content" onClick={expand} onChange={handleChange} value={newNote.content} placeholder="Context" rows={isExpanded ? 3:1}></textarea>
            <Zoom in={isExpanded}><Fab className="fab" type="submit" onClick={submitNote}><AddIcon/></Fab></Zoom>
        </form>
    </div>

}

export default CreateArea;