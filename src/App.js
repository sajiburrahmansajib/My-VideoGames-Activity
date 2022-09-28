import './App.css';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';


function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Home></Home>
      <Blog></Blog>
      <Footer></Footer>
    </div>
  );
}

export default App;
