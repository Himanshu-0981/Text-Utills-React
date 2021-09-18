import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App(){
    return (
        <div>
          <Navbar title = "Text Utils" aboutText = "About"/>
          <div className="container pt-3 text-center">
          <TextForm title="Enter the text to anylize Below"/>
          </div>
        </div>
    )
}

export default App;