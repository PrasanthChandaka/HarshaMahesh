import "./wrap.css"

const Wraps=(props)=>{
    const {arrayItems}=props
    const {url,text}=arrayItems
    return  (
    <div className="wrap-item">
        <img src={url} alt="card-img"/>
        <p className="wrap-para">{text}</p>
    </div>
    )
}

export default Wraps