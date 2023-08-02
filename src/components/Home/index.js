import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-route">
        <h1 className="head-element">Clothes That Get YOU Noticed</h1>
        <img
          className="home-img"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
        />
        <p className="home-para">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that you are. So, celebrate the seasons new and exciting fashion in
          your own way.
        </p>
        <button className="shop-btn" type="button">
          Shop Now
        </button>
      </div>
      <div className="big-screen-img-container">
        <img
          className="big-home-img"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
        />
      </div>
    </div>
  </>
)

export default Home
