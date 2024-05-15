import './index.css'

const GameOptions = props => {
  // console.log(props)
  const {optionDetails, onClickSetUserChoice} = props
  const {imageUrl, id} = optionDetails

  const onClickuserChoice = () => {
    onClickSetUserChoice(id)
  }

  return (
    <li className="options-list-item">
      <button
        className="option-button"
        type="button"
        data-testid={`${id.toLowerCase()}Button`}
        onClick={onClickuserChoice}
      >
        <img className="option-img" src={imageUrl} alt={id} />
      </button>
    </li>
  )
}
export default GameOptions
