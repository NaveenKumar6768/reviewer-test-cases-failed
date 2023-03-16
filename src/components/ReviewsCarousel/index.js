import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  onClickLeftArrow = () => {
    const {index} = this.state
    if (index > 0) this.setState(prevState => ({index: prevState.index - 1}))
  }

  onClickRightArrow = () => {
    const {index} = this.state
    if (index < 3) this.setState(prevState => ({index: prevState.index + 1}))
  }

  render() {
    const {index} = this.state
    console.log(index)
    const {reviewsList} = this.props
    const currentReviewDetails = reviewsList[index]
    const {imgUrl, username, companyName, description} = currentReviewDetails

    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} alt={username} className="image" />
        <div className="arrows-container">
          <button className="button" type="button" data-testid="leftArrow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow"
              onClick={this.onClickLeftArrow}
            />
          </button>
          <p className="username">{username}</p>
          <button className="button" type="button" data-testid="rightArrow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow"
              onClick={this.onClickRightArrow}
            />
          </button>
        </div>
        <p className="company-name">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }
}

export default ReviewsCarousel
