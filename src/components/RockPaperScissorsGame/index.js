import {Component} from 'react'

import {RiCloseLine} from 'react-icons/ri'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import GameOptions from '../GameOptions'
import ScoreCard from '../ScoreCard'

import './index.css'

const gameStatusConstants = {
  inProgress: 'IN_PROGRESS',
  win: 'WIN',
  lost: 'LOST',
  draw: 'DRAW',
}

class GameView extends Component {
  state = {
    score: 0,
    gameStatus: gameStatusConstants.inProgress,
    userChoice: '',
    computerChoice: '',
  }

  generateComputerChoice = () => {
    // console.log(this.props)
    const {choicesList} = this.props
    const gameChoicesList = choicesList.map(choice => choice.id)
    const randomIdx = Math.floor(Math.random() * 3) // if 5.56 then Math.ceil = 6 & math.floor = 5
    return gameChoicesList[randomIdx]
  }

  playGame = () => {
    const {userChoice, computerChoice} = this.state
    // console.log(userChoice)
    // console.log(computerChoice)
    if (userChoice === computerChoice) {
      this.setState({gameStatus: gameStatusConstants.draw})
    } else if (userChoice === 'ROCK') {
      if (computerChoice === 'SCISSORS') {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.win,
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.lost,
          score: prevState.score - 1,
        }))
      }
    } else if (userChoice === 'PAPER') {
      if (computerChoice === 'ROCK') {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.win,
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.lost,
          score: prevState.score - 1,
        }))
      }
    } else if (userChoice === 'SCISSORS') {
      if (computerChoice === 'PAPER') {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.win,
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.lost,
          score: prevState.score - 1,
        }))
      }
    }
  }

  onClickSetUserChoice = id => {
    // console.log(id)
    this.setState(
      {userChoice: id, computerChoice: this.generateComputerChoice()},
      this.playGame,
    )
  }

  onClickPlayAgain = () => {
    // console.log("Play Again Button Clicked")
    this.setState({gameStatus: gameStatusConstants.inProgress})
  }

  renderGameInProgressView = () => {
    // console.log(this.props)
    const {choicesList} = this.props
    return (
      <ul className="game-options-list">
        {choicesList.map(eachOption => (
          <GameOptions
            key={eachOption.id}
            optionDetails={eachOption}
            onClickSetUserChoice={this.onClickSetUserChoice}
          />
        ))}
      </ul>
    )
  }

  renderGameDrawView = () => {
    const {choicesList} = this.props
    const {userChoice, computerChoice} = this.state

    const userChoiceList = choicesList.filter(
      choice => choice.id === userChoice,
    )
    const userChoiceObject = userChoiceList[0]

    const computerChoiceList = choicesList.filter(
      choice => choice.id === computerChoice,
    )
    const computerChoiceObject = computerChoiceList[0]

    return (
      <div className="game-result-view-container">
        <div className="selected-options-container">
          <div className="game-user-options-container">
            <p className="game-participant-text">YOU</p>
            <img
              className="game-participant-choice-img"
              src={userChoiceObject.imageUrl}
              alt="your choice"
            />
          </div>
          <div className="game-user-options-container">
            <p className="game-participant-text">OPPONENT</p>
            <img
              className="game-participant-choice-img"
              src={computerChoiceObject.imageUrl}
              alt="opponent choice"
            />
          </div>
        </div>
        <p className="result-text">IT IS DRAW</p>
        <button
          className="play-again-button"
          type="button"
          onClick={this.onClickPlayAgain}
        >
          PLAY AGAIN
        </button>
      </div>
    )
  }

  renderGameLostView = () => {
    const {choicesList} = this.props
    const {userChoice, computerChoice} = this.state

    const userChoiceList = choicesList.filter(
      choice => choice.id === userChoice,
    )
    const userChoiceObject = userChoiceList[0]

    const computerChoiceList = choicesList.filter(
      choice => choice.id === computerChoice,
    )
    const computerChoiceObject = computerChoiceList[0]

    return (
      <div className="game-result-view-container">
        <div className="selected-options-container">
          <div className="game-user-options-container">
            <p className="game-participant-text">YOU</p>
            <img
              className="game-participant-choice-img"
              src={userChoiceObject.imageUrl}
              alt="your choice"
            />
          </div>
          <div className="game-user-options-container">
            <p className="game-participant-text">OPPONENT</p>
            <img
              className="game-participant-choice-img"
              src={computerChoiceObject.imageUrl}
              alt="opponent choice"
            />
          </div>
        </div>
        <p className="result-text">YOU LOSE</p>
        <button
          className="play-again-button"
          type="button"
          onClick={this.onClickPlayAgain}
        >
          PLAY AGAIN
        </button>
      </div>
    )
  }

  renderGameWonView = () => {
    // console.log(this.props)
    const {choicesList} = this.props
    const {userChoice, computerChoice} = this.state

    const userChoiceList = choicesList.filter(
      choice => choice.id === userChoice,
    )
    const userChoiceObject = userChoiceList[0]

    const computerChoiceList = choicesList.filter(
      choice => choice.id === computerChoice,
    )
    const computerChoiceObject = computerChoiceList[0]

    return (
      <div className="game-result-view-container">
        <div className="selected-options-container">
          <div className="game-user-options-container">
            <p className="game-participant-text">YOU</p>
            <img
              className="game-participant-choice-img"
              src={userChoiceObject.imageUrl}
              alt="your choice"
            />
          </div>
          <div className="game-user-options-container">
            <p className="game-participant-text">OPPONENT</p>
            <img
              className="game-participant-choice-img"
              src={computerChoiceObject.imageUrl}
              alt="opponent choice"
            />
          </div>
        </div>
        <p className="result-text">YOU WON</p>
        <button
          className="play-again-button"
          type="button"
          onClick={this.onClickPlayAgain}
        >
          PLAY AGAIN
        </button>
      </div>
    )
  }

  renderGameView = () => {
    const {gameStatus} = this.state
    // Using Switch case
    switch (gameStatus) {
      case gameStatusConstants.inProgress:
        return this.renderGameInProgressView()
      case gameStatusConstants.draw:
        return this.renderGameDrawView()
      case gameStatusConstants.win:
        return this.renderGameWonView()
      case gameStatusConstants.lost:
        return this.renderGameLostView()
      default:
        return null
    }
  }

  render() {
    const {score} = this.state
    return (
      <div className="app-contianer">
        <ScoreCard score={score} />
        <div className="game-view-container">{this.renderGameView()}</div>
        <div className="popup-container">
          <Popup
            modal
            trigger={
              <button className="trigger-button" type="button">
                RULES
              </button>
            }
            closeOnEscape
            window
          >
            {close => (
              <div className="popup-view">
                <img
                  className="popup-image"
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
                <button
                  className="close-button"
                  type="button"
                  onClick={() => close()}
                >
                  <RiCloseLine className="close-btn-icon" />
                </button>
              </div>
            )}
          </Popup>
        </div>
      </div>
    )
  }
}
export default GameView
