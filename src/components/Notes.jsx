import {useContext} from 'react';

import {KeeperContext} from '../store/KeeperContext';

import {NotesContainer} from './StyledComponents';

import {Note} from './Note';

export const Notes = () =>{
    const {notes, setNotes} = useContext(KeeperContext);
    return <NotesContainer>
        {
            notes.map(note => <Note key={note.id} {...note} />)
        }
    </NotesContainer>
}