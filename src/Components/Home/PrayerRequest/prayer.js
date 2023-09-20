import {Component} from "react"
import Form from 'react-bootstrap/Form';
import "./prayer.css"

class PrayerRequest extends Component{
    render(){
        return (
        <div className="prayer-container">
            <div className="profile">
                <img className="profile-img" src="/Profile/profile.png" alt="profile-img"/>
            </div>
            <div className="profile-content">
                <h1 className="content-head">Prayer Request</h1>
                <p className="content-profile-para">If you have a prayer request for yourself or your loved one,
                 do not hesitate to write your heart to us. We have our 
                 anointed prayer team interceding for your needs at the feet of the Lord.</p>
            </div>
            <Form>
                <input type="text" placeholder="Your Name"/>
                <input type="email" placeholder="Email Id"/>
                <input type="text" placeholder="Contact No"/>
                <textarea placeholder="Type your message here" rows="4" cols="50">

                </textarea>
            <button className="submit" type="submit">Submit</button>
            </Form>
        </div>
        
        )
        
    }
}

export default PrayerRequest
