import "./header.css"

const Header=()=>{

    const Hambar=()=>{
        const toggle=document.getElementById("toggle")
        toggle.classList.toggle("display")
    }

    return (<header className="header">
        <div className="logo-container">
            <img alt="logo" className="logo" src="https://s3-alpha-sig.figma.com/img/a74b/9441/d039117c1522fe1398999cb40ee6d673?Expires=1696204800&Signature=FnygalsahpoeSnC-0pZLs-xvXKsNrI4UhjSxpBr~qNhoqFfSeCKKQhhFW5x2KmlMOhXmyp02j7hJobAhY9FU0C6Mi2khjNLlKE5bFLUS~VESZX8aQN3CbO92hzs4iiYXBxR0s2Pme2WD-z7LkdnBy0verlMy5uTIp6zZvIFVLyIoXU2MPwdqodE8aJO6Nuc8LTu~Fqjt7VTd-f1F9qGZpbvKt2TfyVX4UVJIVCVfqi2SaR5KTq8TtrUx867eRX3RmU21rjMhV8irVZ3oFWGKaH~hkLK-k3Q2qhwwYX34YB-tAhZA0EXEBGnps6oqRA7RMyIjJpUqVqQgFzeqmPZEFg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>
        </div>
        <div className="ham-container" onClick={Hambar}>
            <p>Menu</p>
            <i class="ham-icon fa-solid fa-bars"></i>
        </div>
        <div className="items-container display" id="toggle">
            <p  className="nav-item">HOME</p >
            <p className="nav-item">ABOUT</p >
            <p className="nav-item">STORY OF GOD</p >
            
            <div className="hover1">
            <div className="navigate">
            <p className="nav-item nav1">MINISTRIES</p>
                    <i class="nav-icon fa-solid fa-angle-down"></i>
                </div>
                <div className="dropdown">
                    <p className="drop-item">Music</p>
                    <p className="drop-item">Dicipling</p>
                    <p className="drop-item">Out-reach</p>
                    <p className="drop-item">Youth</p>
                </div>    
            </div>
            <p className="nav-item">SERMONS</p>
            <p className="nav-item">BLOG</p>
            <p className="nav-item">STORE</p>
            
            <div className="hover1">
                <div className="navigate">
                    <p className="nav-item nav1">CONTACT</p>
                    <i class="nav-icon fa-solid fa-angle-down"></i>
                </div>
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
    </header>)
}
export default Header