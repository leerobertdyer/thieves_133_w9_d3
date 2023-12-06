import { useState } from "react";
import { ImEvil2 } from "react-icons/im";
import { ImEvil } from "react-icons/im";
import './Like.css'

const Like = () => {
    const [mood, setMood] = useState("angry")

    const handleClick = () => {
        if (mood === "angry") {
            setMood("")
            console.log("liked");
        }
        else {
            setMood("angry")
            console.log('unliked')
        }
    }

    return (
        <div className="mainLikeDiv">
            {mood === "angry"

                ? (<>
                    <h1 className="post"
                    onClick={() =>  handleClick()}
                    >Like me dammit...</h1>
                    <ImEvil size={50}
                        className="icon"
                        fill="red"
                        onClick={() =>  handleClick()} />
                </>)

                : (<>
                    <h1 className="post"
                    onClick={() =>  handleClick()}
                    >Me Likey!!!!</h1>
                    <ImEvil2
                        size={50}
                        className="icon"
                        fill="gold"
                        onClick={() => handleClick() } />
                </>)}

        </div>
    )
}

export default Like