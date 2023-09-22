import "./footer.css"

const Footer=()=>{

    const prevent=(event)=>{
        event.preventDefault()
    }

    return <footer className="footer-container">
       <div className="footer-card">
       <p className="checkbox-head">Contact Details</p>
            <div className="icon-with-para">
                <i class="fa-solid fa-location-dot footer-icon"></i>
                <p className="footer-card1-content">SONS’ Ministries No. 8-3-95/1, Pheddabanda Nalgonda, Telangana</p>   
            </div>
            <div className="icon-with-para">
                <i class="fa-solid fa-phone footer-icon"></i>
                <p className="footer-card1-content">+91 76809 68577</p>   
            </div>
            <div className="icon-with-para">
            <i class="fa-regular fa-envelope footer-icon"></i>
                <p className="footer-card1-content">maheshgopalasetti123@gmail.com</p>   
            </div>
       </div>
       <div className="footer-card">
            <p className="checkbox-head">What will happen if I obey my spiritual leaders? If I obey:</p>
            <form>
                <div>
                    <input type="checkbox" id="checkbox1"/>
                    <label htmlFor="checkbox1">I will not have freedom</label>
                </div>
                <div>
                    <input type="checkbox" id="checkbox2"/>
                    <label htmlFor="checkbox1">Satan will be defeated</label>
                </div>
                <div>
                    <input type="checkbox" id="checkbox3"/>
                    <label htmlFor="checkbox1">I will be disciplined</label>
                </div>
                <div>
                    <input type="checkbox" id="checkbox4"/>
                    <label htmlFor="checkbox1">I will receive the revelation of the right way for my future</label>
                </div>
                <div>
                    <input type="checkbox" id="checkbox5"/>
                    <label htmlFor="checkbox1">I don’t want to obey them because I know everything</label>
                </div>
                <div className="vote">
                <button type="button" className="vote-btn">Vote</button>
                </div>
            </form>
       </div>
       <div className="footer-card">
       <p className="checkbox-head">Subscribe to get the weekly edition of our blog</p>
            <form >
                <div className="input-fields">
                    <div className="input-fields1">
                        <label htmlFor="name">Name</label><br/>
                        <input className="name" type="name" id="name"/>
                    </div>
                    <div className="input-fields2">
                        <label htmlFor="email">Email</label><br/>
                        <input className="name" type="email" id="email"/>
                    </div>
                </div>   
                <div className="vote">
                <button type="submit" onSubmit={prevent} className="vote-btn">Sign up</button>
                </div>
            </form>
       </div>
    </footer>
}
export default Footer