import './App.css';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Nav from './components/Nav';
import HomePage from './components/HomePage';
import FullRecipes from './components/FullRecipes';



function App() {
  return (
    <div className="App">
      <Nav></Nav>
       <FullRecipes></FullRecipes>
      <Footer></Footer>
</div>
  );
}

export default App;
