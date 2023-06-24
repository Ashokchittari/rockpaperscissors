import './index.css'

const OptionBtn = props => {
  const {option, setOption} = props
  const {imageUrl, id, btnName} = option
  const changeOption = () => {
    setOption(option)
  }

  return (
    <button
      type="button"
      data-testid={btnName}
      onClick={changeOption}
      id={id}
      className="optionsContainer"
    >
      <img src={imageUrl} alt={id} className="optionBtn" />
    </button>
  )
}

export default OptionBtn
