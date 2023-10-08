
import './App.css';
import FirstFooter from './Components/FirstFooter';
import FirstSlide from './Components/FirstSlide';
import NavbarCont from './Components/NavbarCont';
import SecondSlide from './Components/SecondSlide';
import SliderImage from './Components/SliderImage';

function App() {
  return (
    <div className="App">
      <NavbarCont />
      <SliderImage />
      <FirstSlide />
      <SecondSlide />
      <FirstFooter />
    </div>
  );
}

export default App;
