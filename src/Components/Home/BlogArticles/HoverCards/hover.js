import "../HoverCards/hover.css"
const HoverCards=()=>{
    return <div className="hover-container">
        <div className="hover-me">
        <div className="item1 item">
            <div className="icon-container">
        <i class="icon fa-solid fa-music"></i>
        </div>
            <p>Music</p>
           <button className="know-more-btn" type="button">Know More</button>
        </div>
        </div>
        <div className="hover-me">
        <div className="item2 item">
            <div className="icon-container">
            <i class="icon fa-solid fa-blog"></i>
        </div>
            <p>Blog</p>
            <button className="know-more-btn" type="button">Know More</button>
        </div>
        </div>
        <div className="hover-me">
        <div className="item3 item">
            <div className="icon-container">
        <i class="icon fa fa-book"></i>
        </div>
            <p>Sermons</p>
            <button className="know-more-btn" type="button">Know More</button>
        </div>
        </div>
        <div className="hover-me">
        <div className="item4 item">
            <div className="icon-container">
            <i class="icon fa fa-edit"></i>
            </div>
            <p>Lyrics and Chords</p>
            <button className="know-more-btn" type="button">Know More</button>
        </div>
        </div>
        <div className="hover-me">
        <div className="item5 item">
            <div className="icon-container">
        <i class="icon fa fa-user-plus"></i>
        </div>
            <p>LET’S FELLOWSHIP</p>
            <button className="know-more-btn" type="button">Know More</button>
        </div>
        </div>
        <div className="hover-me">
        <div className="item6 item">
            <div className="icon-container">
        <i class="icon fa fa-cloud-download"></i>
        </div>
            <p>Downloads</p>
            <button className="know-more-btn" type="button">Know More</button>
        </div>
        </div>
    </div>
}
export default HoverCards