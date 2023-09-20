import {Component} from "react"
import Header from "../Header/header.js"
import ReactSlick from "./ReactSlick/banner.js"
import "../Home/home.js"


class Home extends Component{
    render(){
     return <>
     <Header/>
     <div className="home"> 
       <ReactSlick/>
    </div>
    
    </>
    }
}
export default Home