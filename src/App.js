
import './App.css';
import Header from "./Components/Header/header"
import Home from "./Components/Home/home"
import Footer from "./Components/Footer/footer";


function App() {
   return (
        <div className="main-container">
        <Header/>
            <Home/>  
            <Footer/>    
        </div>
   )
}

export default App;
