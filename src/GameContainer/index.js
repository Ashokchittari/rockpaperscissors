import {Component} from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import RenderResult from '../RenderResult'
import OptionBtn from '../OptionBtn'
import './index.css'

class GameContainer extends Component {
  state = {
    score: 0,
    opponentOption: '',
    result: '',
    isGameOver: false,
    selectedOption: '',
  }

  componentDidMount() {
    const randomNumber1 = Math.floor(Math.random() * 3 + 1)
    console.log(randomNumber1)
    if (randomNumber1 === 1) {
      this.setState({opponentOption: 'ROCK'})
    } else if (randomNumber1 === 2) {
      this.setState({opponentOption: 'PAPER'})
    } else {
      this.setState({opponentOption: 'SCISSORS'})
    }
    this.setState({isGameOver: false})
  }

  setOption = props => {
    const {id} = props
    const {opponentOption} = this.state
    if (id === 'ROCK' && opponentOption === 'PAPER') {
      this.youLose()
    } else if (id === 'ROCK' && opponentOption === 'ROCK') {
      this.draw()
    } else if (id === 'ROCK' && opponentOption === 'SCISSORS') {
      this.youWon()
    } else if (id === 'PAPER' && opponentOption === 'ROCK') {
      this.youWon()
    } else if (id === 'PAPER' && opponentOption === 'SCISSORS') {
      this.youLose()
    } else if (id === 'PAPER' && opponentOption === 'PAPER') {
      this.draw()
    } else if (id === 'SCISSORS' && opponentOption === 'PAPER') {
      this.youWon()
    } else if (id === 'SCISSORS' && opponentOption === 'ROCK') {
      this.youLose()
    } else {
      this.draw()
    }
    this.setState({isGameOver: true, selectedOption: id})
  }

  youWon = () => {
    this.setState(prev => ({
      score: prev.score + 1,
      result: 'YOU WON',
    }))
  }

  youLose = () => {
    this.setState(prev => ({
      score: prev.score - 1,
      result: 'YOU LOSE',
    }))
  }

  draw = () => {
    this.setState({result: 'IT IS DRAW'})
  }

  playAgain = () => {
    const randomNumber1 = Math.floor(Math.random() * 3 + 1)
    console.log(randomNumber1)
    if (randomNumber1 === 1) {
      this.setState({opponentOption: 'ROCK'})
    } else if (randomNumber1 === 2) {
      this.setState({opponentOption: 'PAPER'})
    } else {
      this.setState({opponentOption: 'SCISSORS'})
    }
    this.setState({isGameOver: false})
  }

  renderHeader = () => {
    const {score} = this.state
    return (
      <div className="header-container">
        <div>
          <h1>
            ROCK
            <br /> PAPER
            <br /> SCISSORS
          </h1>
        </div>
        <div className="score-container">
          <p>Score</p>
          <p className="score">{score}</p>
        </div>
      </div>
    )
  }

  render() {
    const {isGameOver, opponentOption, result, selectedOption} = this.state
    console.log(opponentOption, selectedOption, result)
    const {choicesList} = this.props
    const yourImage = choicesList.filter(each => each.id === selectedOption)
    const opponentImage = choicesList.filter(each => each.id === opponentOption)
    return (
      <div className="main-container">
        {this.renderHeader()}
        {isGameOver ? (
          <RenderResult
            playAgain={this.playAgain}
            yourImg={yourImage[0].imageUrl}
            opponentImg={opponentImage[0].imageUrl}
            result={result}
          />
        ) : (
          <div className="optionsContainer">
            (
            {choicesList.map(each => (
              <OptionBtn option={each} setOption={this.setOption} />
            ))}
            )
          </div>
        )}
        <div>
          <Popup
            trigger={<button type="button"> Rules</button>}
            position="center"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
            />
          </Popup>
        </div>
      </div>
    )
  }
}

export default GameContainer
