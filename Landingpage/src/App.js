
import './App.css';
import Header from "./components/header/Header";
import FirstSection from './components/sections/firstSection/FirstSection';
import SecondSection from './components/sections/secondSection/SecondSection';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className='App'>
      <Header />
      <FirstSection />
      <SecondSection />
      <Footer />
    </div>
  );
}

export default App;
