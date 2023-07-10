import {useContext} from 'react';

import {KeeperContext} from '../store/KeeperContext';

import {NoteContainer, NoteTitle, NoteContent, DeleteNote} from './StyledComponents';

export const Note = ({id, title, note}) =>{
    const {notes, setNotes} = useContext(KeeperContext);
    const handleDeleteNote = () =>{
        if(confirm('Are you sure?')){
            setNotes(notes.filter(note => note.id !== id));
        }
    }
    return <NoteContainer>
        <NoteTitle>{title}</NoteTitle>
        <NoteContent>
            {note}
        </NoteContent>
        <DeleteNote onClick={handleDeleteNote}>Delete</DeleteNote>
    </NoteContainer>
}