import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

class CharacterCount extends Component {
  state = {charactersList: [], text: ''}

  onInputTextChange = event => {
    this.setState({text: event.target.value})
  }

  onAddButtonClick = e => {
    e.preventDefault()
    const {text} = this.state
    const newText = {
      id: uuidv4(),
      text,
      count: text.length,
    }
    this.setState(prevState => ({
      charactersList: [...prevState.charactersList, newText],
      text: '',
    }))
  }

  render() {
    const {text, charactersList} = this.state
    console.log(charactersList)
    return (
      <div className="app-container">
        <div className="left-container">
          <div className="heading-container">
            <h1 className="heading">Count the characters like a Boss...</h1>
          </div>
          {charactersList.length > 0 ? (
            <ul className="list-container">
              {charactersList.map(each => (
                <li key={each.id}>
                  <p className="each-character">
                    {each.text}:{each.count}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
              className="image"
            />
          )}
        </div>
        <div className="right-container">
          <h1 className="title">Character Counter</h1>
          <div className="input-and-button-container">
            <form onSubmit={this.onAddButtonClick}>
              <input
                type="text"
                placeholder="Enter the Characters here.."
                className="input"
                onChange={this.onInputTextChange}
                value={text}
              />
              <button type="submit" className="button">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default CharacterCount
