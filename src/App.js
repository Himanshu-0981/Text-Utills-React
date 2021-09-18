import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App(){
    return (
        <div>
          <Navbar title = "Text Utils" aboutText = "About"/>
          <div className="container pt-3">
          <TextForm title="Enter the text to anylize Below"/>
          {/* <About/> */}
          </div>
        </div>
    )
}

export default App;