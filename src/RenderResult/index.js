import './index.css'

const RenderResult = props => {
  const {playAgain, yourImg, opponentImg, result} = props
  console.log(yourImg)
  const StartAgain = () => {
    playAgain()
  }
  return (
    <div className="main-container">
      <div className="result-container">
        <div className="img-container">
          <h1>You</h1>
          <img src={yourImg} className="result-img" alt="your choice" />
        </div>
        <div className="img-container">
          <h1>Opponent</h1>
          <img src={opponentImg} className="result-img" alt="opponent choice" />
        </div>
      </div>
      <div className="play-again">
        <p>{result}</p>
        <button onClick={StartAgain} type="button">
          Play Again
        </button>
      </div>
    </div>
  )
}
export default RenderResult
