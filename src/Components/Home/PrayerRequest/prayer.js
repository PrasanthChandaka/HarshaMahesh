import {Component} from "react"
import Form from 'react-bootstrap/Form';
import "./prayer.css"

class PrayerRequest extends Component{
    render(){
        return (
        <div className="prayer-container">
            <div className="profile">
                <img className="profile-img" src="https://s3-alpha-sig.figma.com/img/fe57/2265/78c27a86e857ed6cd5e63acfab6a0eb6?Expires=1696204800&Signature=LECQWf1ik7i-hvqtz8udRdPD0BoHGgv1Er91bVFOWvLtWP3QOltKBlBmvn-VxXjIfxSENytfD3k8h~vVTfVNlR9pNYSjMB1WMUQTQ77K0LDZa3H~VtMK0xAPRd3cOco7P6jHv1bDZ1egP0WKAzyz6dQsW078XQJRM2KK6WDWtFTVTZMc4ZPmiZppQMGwmNVFgj5~p~4SkQ1mAk5t1o~3f4maV~hKhWBBrqS5ADOhPYPswfKNJoz05lZNLAtSRAgRZ3ADmQRDmi1l-vi9n-FCMMc1U~XEcLMe~B8x6kbtSQ2~j3~2QmxnfNjSjBUsz9EAQfCeLP-CFO~v-Bkhsv-48g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="profile-img"/>
            </div>
            <div className="profile-content">
                <h1 className="content-head">Prayer Request</h1>
                <p className="content-profile-para">If you have a prayer request for yourself or your loved one,
                 do not hesitate to write your heart to us. We have our 
                 anointed prayer team interceding for your needs at the feet of the Lord.</p>
            </div>
            <Form>
                <input className="input" type="text" placeholder="Your Name"/>
                <input className="input" type="email" placeholder="Email Id"/>
                <input className="input" type="text" placeholder="Contact No"/>
                <textarea placeholder="Type your message here" rows="4" cols="50">

                </textarea>
            <button className="submit" type="submit">Submit</button>
            </Form>
        </div>
        
        )
        
    }
}

export default PrayerRequest
