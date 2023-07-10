import {useContext} from 'react';

import {KeeperContext} from '../store/KeeperContext';

import {AddNoteContainer, Input, Button} from './StyledComponents';

export const AddNote = () =>{
    const {notes, setNotes, info, setInfo} = useContext(KeeperContext);
    const handleAddNote = event =>{
        event.preventDefault();
        if(!(info.title && info.note)){
            return alert('Enter Title and Note');
        }
        const newId = notes.length ? notes[notes.length - 1].id + 1 : 1;
        setNotes([...notes, {id: newId, title: info.title, note: info.note}]);
        setInfo({title: '', note: ''});
    }

    const handleOnChange = event =>{
        const {name, value} = event.target;
        setInfo({...info, [name]: value});
    }
    return <AddNoteContainer>
        <Input onChange={handleOnChange} type="text" name="title" value={info.title} placeholder="Title" />
        <Input onChange={handleOnChange} type="text" name="note" value={info.note} placeholder="Take a note..." />
        <Button type="submit" onClick={handleAddNote}>Add</Button>
    </AddNoteContainer>
}