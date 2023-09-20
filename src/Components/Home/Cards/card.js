import { Component } from "react";
import Wraps from "./Wraps/wrap"
import "./card.css"

const arrayItems=[
    {
        id:1,
        text:"Return Of Jews",
        url:"https://s3-alpha-sig.figma.com/img/470a/9fa9/d410cb3cc3d5ea558afb3b7d98e06e62?Expires=1696204800&Signature=Wbq8cfnfTj5sh7MEShBR1DY1UgU5zCUr8MXk6vlcFJjY1JscH3N-DmsdY7opOI2b~dgu5038jdV4lRHXWlBAX6fqYwMpwBR36m83~5Y9r3yM9IeBSz3VuCFvyZCUIpA5IKgXRXYjoJqULOM7q1jQvCZIDz56osuQdno41qfDHqDx0Ndhqp3vHmE~hD23Fbk1NzVzxkBEpGdemmSfQatY2ZWeNHr5mbRFOholWG50uPbclPqAUtfqoIYuzW35zA5zkv2lueGHyew1MlXy0BJdWpFq7ig1wkShej-spEzgjj-8nWI2ukSJLxgeq8WkSa~DX1KFD-CAlB2GGQTqKnFtMw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
        id:2,
        text:"War And Destruction",
        url:"https://s3-alpha-sig.figma.com/img/fbdb/80a9/a4f6b9fec40594d6e472a6c76dfe446f?Expires=1696204800&Signature=mOBPstCpTyfqqDcWoS6~tRPRR4sx4L~vThBva7V-zHJ2G8YJqQMwx~bWZw-iUk-Mk3YAQBEDBDeuMbAbpdjgXfjB4bAtKacL5G~tjZZfcQurS5FmWOIN26JuklJ-t5tuRXlE~Vc-ol-DwQ5USm8jdQ5~AjU57tATZy1XVHt~tQLeSmTbAh4wjO0qZYVeh~oneZl9cd2KCV9jQu26hEKYwtg0x428yLJ-rSb6i4hH5E9PeVqNZv8yAzLwNuXP3yJ91ydjj2FKSBTbAehcGO0uG87mioLZ7mLnt8Zicw8DIz769BOnZoC5xMDwgcX2BZZ-i~4DZcz2vogadT45fvvtSQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
        id:3,
        text:"Sign In The Sun, Moon, Stars",
        url:"https://s3-alpha-sig.figma.com/img/e0b5/3068/06ae5b7763043bad0248ba22578fca5d?Expires=1696204800&Signature=htjSN83ahW7TLTuuhsGtdQLMaigXbUrVftLNEgya28By3WfEFgKmUnLAr3gUVSfRVjTNnQDxjoesG9tJoriV8OQ686SLGtb7jVBAw9elKGFzbKSm-U63DkZwSC8zS5iHkIVQxnmeqSNu9pYoYloCJ2pDHu7wPaplxZG5M6B9lPukpMSoD9qaqN1lcqCJI6RY99sbRTo7MYKdna89ValtS3y9MldX69dTzn6fZlN6tBxxYwvDQiy3GP7DWqQqarm-NB~b7pu1FAC4fWtESOz-PkelxXvKnspQgDaMX-s4dQoFnTWKcE518UpUDKx2SqZJ~9pjU18LlkS-G7aMl7zLmA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
        id:4,
        text:"False Prophets",
        url:"https://s3-alpha-sig.figma.com/img/a792/eee2/841af7b73c4e604715dc29e2eaea30b0?Expires=1696204800&Signature=elKPn~8LccAoBODluwSBX~uCmrwGjJB44vDOjznJpmRBju9bdhGsi7Te4fiojhUvH54-i6eOAMg4mHRrag8n0lh26mDNxpSG54mPBbCelKh96HnsgbZOsEZkxmETUo55fs2rd1ManJp1ndcycm7Ez6hFRQI3d76ZtoQ9DaHajQPwGU~6R-RnK7UGGhjNKLRJ43qVcDEjNslhzroeonsF2F9crC6l2XMaAlYRwxwa4l~asxsJ~IycYUY5tt-kShzyGI9FP2ngpemceLVFvP5FsvZ3zVKlt1uFIEvaXZ5YNTw0hCNo0yCczJNVfRQwrSL-CGZ9LVet5mskuId3kIcJUA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
        id:5,
        text:"Pestilence",
        url:"https://s3-alpha-sig.figma.com/img/43fc/028a/6481b7d69ea622fcd66817eb82de3b08?Expires=1696204800&Signature=VQCMvgf3zMAiyFIIFGxFjYLuL0ReYH492PdWrfbqiyLyhrEfipZk6FiDQJZ3TrEJupN9oM4jXu03~g~b9zLLi1IK7V07vhLTzQWZdn77JoXI7iwRRmsUVt02qSXHWUC1YTIO3emkR25Zq9BTw3UFOV72xVuU~xRpts7WAUsj2Hm9zgl4rEp~j5iLeHI2OnHm2ZY0-Ez4NN4hgwTzjt3~6HOvkRg5SYn2~LC5O~8Uay6XNZPbEvaYzhp9OjwdnUQ0-BaxQek7VnSQpO9~TsbLGTRMeGZDkScM61xTTuusl9huXKU0~xbbB-iBTQpRADNBvVreok2Uou2zPH7yWAOAAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
        id:6,
        text:"Death By Plague",
        url:"https://s3-alpha-sig.figma.com/img/94bc/142e/76d491fb137943f68a95d8420537aeda?Expires=1696204800&Signature=JflDDV3VQHifDCjJmH3TlZh7KVVGa5x8XkfA9hTpLv78LouxPsfHIyv5FpgWw5WbjPBXUOozZjJM4p-Hw9th2c8BlxTlpO1c2tKFoOb5d8fh4DSyB7D9oHvsbyPTG6tknK77hk7VAazha1V9NfBpm48AXI9oiNg478Q3256xV-XnkJB9IC2nWlYJBQoiHBzzeDtgs5Rg8j-x4Mtm2fowDTE1hjmeb1Vcqdr5CAxk1lj2M46DScDpfR0lX8wWvvNaT0FXYSE5-Tb6-qUwem0aeZVtdGi2e1GBaPXoMex5V-7cFKGy2Bsg4-KDxNmAOD3Kt1l0LdCu38UTGVygUBUDCA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    }
]

class Cards extends Component{
    render(){
        return <div className="card-container">
            <h1 className="card-head">How far is Lord’s Return?</h1>
            <div className="wrap-container">
                {arrayItems.map((each)=>(
                    <Wraps arrayItems={each} key={each.id}/>
                ))}
            </div>
        </div>
    }
}
export default Cards