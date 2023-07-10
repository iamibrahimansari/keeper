import styled from 'styled-components';

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const HeaderComponent = styled.header`
    background-color: yellow;
    box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.1);
`

export const Title = styled.h1`
    padding: 1.5rem;
    font-size: 3rem;
    display: inline-block;
    cursor: pointer;
`

export const NotesContainer = styled.div`
    display: flex;
    gap: 2rem;
    margin: 2rem;
    flex-wrap: wrap;
    height: 55vh;
    overflow-y: auto;
`

export const NoteContainer = styled.div`
    background-color: #fff;
    padding: 1rem;
    border-radius: 10px;
    width: 30rem;
    align-self: flex-start;
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);
    position: relative;
`

export const NoteTitle = styled.h1`
    font-size: 2rem;
    margin-bottom: 1rem;
`

export const NoteContent = styled.p`
    font-size: 1.6rem;
    margin-bottom: 3rem;
`

export const FooterContainer = styled.footer`
    position: absolute;
    bottom: 0;
    width: 100%;
`

export const FooterContent = styled.p`
    padding: 2rem;
    font-size: 1.4rem;
    color: #444;
    text-align: center;
`

export const AddNoteContainer = styled.form`
    background-color: #fff;
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: auto;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.1);
    position: relative;
`

export const Input = styled.input`
    font-size: ${({placeholder}) => placeholder === 'Title' ? '1.6rem' : '1.4rem'};
    padding: 0.5rem 1rem;
    border: none;
    margin-bottom: 1rem;
`

export const Button = styled.button`
    font-size: 1.4rem;
    background-color: yellow;
    border: none;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    position: absolute;
    bottom: -2rem;
    left: 50%;
    transform: translateX(-50%);
`

export const DeleteNote = styled(Button)`
    width: 5rem;
    height: 5rem;
`