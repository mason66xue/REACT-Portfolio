// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Nav from './component/Nav/nav';
import Footer from './component/Footer/index';
import Header from './component/Header';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Footer/>
      <Header/>
      
    </div>
  );
}

export default App;
