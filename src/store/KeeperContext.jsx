import {createContext, useState} from 'react';

export const KeeperContext = createContext();

export const KeeperProvider = ({children}) =>{
    const [notes, setNotes] = useState([]);
    const [info, setInfo] = useState({title: '', note: ''});
    const states = {notes, setNotes, info, setInfo};
    return <KeeperContext.Provider value={states}>
        {children}
    </KeeperContext.Provider>
}