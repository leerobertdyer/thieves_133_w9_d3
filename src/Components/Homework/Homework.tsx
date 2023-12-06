import { useState } from "react"
import './Homework.css'

const Homework = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Dylan"
    }
  })
  
  const handleClick = () => {
    if (game.player.name === "Dylan"){
      setGame({ ...game, player: { name: "Shamu" } })
    } else {
      setGame({...game, player: { name: 'Dylan'}})
    }
  }

  return (
    <>
      <div className="mainHomeworkDiv">
        <h1>Updating State Exercise:</h1>
        <h2>Current Player:</h2>
        <h3>{game.player.name}</h3>

        <button 
        onClick={handleClick}
        >Change Player</button>
      </div>

    </>
  )
}

export default Homework