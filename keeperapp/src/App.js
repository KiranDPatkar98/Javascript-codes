import logo from './logo.svg';
import './App.css';
import Header from "./components/header"
import Footer from "./components/footer"
import { Note } from './components/note';

function App() {
  return (
    <div>
    <Header />
    <Note />
    <Footer /> 
    </div>
  );
}

export default App;
