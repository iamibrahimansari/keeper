import {Main} from './components/StyledComponents';
import {Header} from './components/Header';
import {AddNote} from './components/AddNote';
import {Notes} from './components/Notes';
import {Footer} from './components/Footer';


const App = () => {
  return (
    <Main>
      <Header />
      <AddNote />
      <Notes />
      <Footer />
    </Main>
  )
}

export default App
