import './App.css';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Nav from './components/Nav';
import HomePage from './components/HomePage';
import FullRecipesCard from './components/FullRecipesCard';
import Info from './components/Info'
import Recipes from './components/Recipes';
import Routers from './components/Routers';



function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <HomePage></HomePage>
    {/* <Routers></Routers> */}
    <Footer></Footer>
    </div>


  );
}

export default App;
