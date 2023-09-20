import "./header.css"

const Header=()=>(
    <header className="header">
        <div className="logo-container">
            <img alt="logo" className="logo" src="/Profile/logo.jpg"/>
        </div>
        <div className="items-container">
            <p  className="nav-item">HOME</p >
            <p className="nav-item">ABOUT</p >
            <p className="nav-item">STORY OF GOD</p >
            
            <div className="hover1">
            <p className="nav-item">MINISTRIES</p >
                <div className="dropdown">
                    <p className="drop-item">Music</p>
                    <p className="drop-item">Dicipling</p>
                    <p className="drop-item">Out-reach</p>
                    <p className="drop-item">Youth</p>
                </div>    
            </div>
            <p className="nav-item">SERMONS</p >
            <p className="nav-item">BLOG</p >
            <p className="nav-item">STORE</p >
            
            <div className="hover1">
            <p className="nav-item">CONTACT</p >
                <div className="dropdown">
                    <p className="drop-item">Invite Bro. Ravinder</p>
                    <p className="drop-item">Prayer Request</p>
                    <p className="drop-item">Reach Us</p>
                    
                </div>    
            </div>
            <p className="nav-item">DONATE</p >
            <p className="nav-item">GALLERY</p >
            <p className="nav-item">LIVE</p >
        </div>
    </header>
)
export default Header