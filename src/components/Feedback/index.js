import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isFeeObjectSelected: false}

  onClickEmoji = () => this.setState({isFeeObjectSelected: true})

  renderFeedbackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="feedback-question-container">
        <h1 className="feedback-question">
          How satisfied are you with our customer support performance
        </h1>

        <ul className="emojis-list">
          {emojis.map(each => (
            <li key={each.id}>
              <button
                className="emoji-btn"
                type="button"
                onClick={this.onClickEmoji}
              >
                <img src={each.imageUrl} className="emoji" alt={each.name} />
                <br />
                <span className="emoji-name">{each.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankyouScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thank-you-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h3 className="thankyou-text">Thank You!</h3>
        <p className="description">
          We will use your feedback to improve our customer performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeeObjectSelected} = this.state
    return (
      <div className="app-container">
        <div className="feedback-card">
          {isFeeObjectSelected
            ? this.renderThankyouScreen()
            : this.renderFeedbackQuestion()}
        </div>
      </div>
    )
  }
}

export default Feedback
