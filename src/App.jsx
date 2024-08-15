import { useState, useEffect } from 'react'
import './App.css'
import Followers from './Components/Followers/Followers'
import Overview from './Components/OverView/OverView'
function App() {

  // dark mode
  const [theme, setTheme] = useState("dark");
  function handleChange(event) {
    setTheme(event.target.checked ? 'dark' : 'light');
  };


  const [ArrayOfObject, setArrayOfObject] = useState([
    {
      platform: "src/assets/images/icon-facebook.svg",
      username: "@nathanf",
      metric: "Followers",
      value: 1987,
      change: "12 Today",
      updown: "src/assets/images/icon-up.svg",
      id: 1,
      class: "c1"
    },
    {
      platform: "src/assets/images/icon-twitter.svg",
      username: "@nathanf",
      metric: "Followers",
      value: 1044,
      change: "99 Today",
      updown: "src/assets/images/icon-up.svg",
      id: 2,
      class: "c2"
    },
    {
      platform: "src/assets/images/icon-instagram.svg",
      username: "@realnathanf",
      metric: "Followers",
      value: 11000,
      change: "1099 Today",
      updown: "src/assets/images/icon-up.svg",
      id: 3,
      class: "c3"
    },
    {
      platform: "src/assets/images/icon-youtube.svg",
      username: "Nathan F.",
      metric: "Subscribers",
      value: 8239,
      change: "144 Today",
      updown: "src/assets/images/icon-down.svg",
      id: 4,
      class: "c4"
    }
  ])
  const [ArrayOfObject2, setArrayOfObject2] = useState([
    {
      platform: "src/assets/images/icon-facebook.svg",
      metric: "Page Views",
      value: 87,
      change: "3%",
      updown: "src/assets/images/icon-up.svg",
      id: 1,
      class: "card1"
    },
    {
      platform: "src/assets/images/icon-facebook.svg",
      metric: "Likes",
      value: 52,
      change: "2%",
      updown: "src/assets/images/icon-down.svg",
      id: 2,
      class: "card2"
    },
    {
      platform: "src/assets/images/icon-instagram.svg",
      metric: "Likes",
      value: 5462,
      change: "2257%",
      updown: "src/assets/images/icon-up.svg",
      id: 3,
      class: "card3"
    },
    {
      "platform": "src/assets/images/icon-instagram.svg",
      "metric": "Profile Views",
      "value": 52000,
      "change": "1375%",
      "updown": "src/assets/images/icon-up.svg",
      "id": 4,
      "class": "card4"
    },
    {
      "platform": "src/assets/images/icon-twitter.svg",
      "metric": "Retweets",
      "value": 117,
      "change": "303%",
      "updown": "src/assets/images/icon-up.svg",
      "id": 5,
      "class": "card5"
    },
    {
      "platform": "src/assets/images/icon-twitter.svg",
      "metric": "Likes",
      "value": 507,
      "change": "553%",
      "updown": "src/assets/images/icon-up.svg",
      "id": 6,
      "class": "card6"
    },
    {
      "platform": "src/assets/images/icon-youtube.svg",
      "metric": "Likes",
      "value": 107,
      "change": "19%",
      "updown": "src/assets/images/icon-down.svg",
      "id": 7,
      "class": "card7"
    },
    {
      "platform": "src/assets/images/icon-youtube.svg",
      "metric": "Total Views",
      "value": 1407,
      "change": "12%",
      "updown": "src/assets/images/icon-down.svg",
      "id": 8,
      "class": "card8"
    }
  ])
  // useEffect(() => {
  //   function CallApi() {
  //     fetch("http://localhost:3000/followers")
  //       .then((respon) => {
  //         return respon.json()
  //       })
  //       .then((finalResult) => {
  //         setArrayOfObject(finalResult)
  //       })
  //     fetch("http://localhost:3000/engagement")
  //       .then((respon) => {
  //         return respon.json()
  //       })
  //       .then((finalResult) => {
  //         setArrayOfObject2(finalResult)
  //       })

  //   }
  //   CallApi()
  // }, [])

  return (
    <>
      <main className={theme}>
        <div class="background1"></div>
        <div class="background2"></div>
        <div className='all'>
          <div className='Header'>
            <div className='divtitle'>
              <label className='title1'>Social Media Dashboard</label>
              <label className='smalltitle'>Total Followers:23,004</label>
            </div>
            <hr />
            {/* Toggle */}
            <div className='switchdiv' >
              <label className='text'>Dark Mode</label>
              <label class="switch">
                <input
                  checked={theme === 'dark'}
                  type="checkbox"
                  onChange={handleChange}
                />
                <span class="slider round"></span>
              </label>
            </div>

          </div>
          <div className='Followers'>
            {ArrayOfObject.map((item) => {
              return (
                <div>
                  <Followers
                    key={item.id}
                    class={item.class}
                    platform={item.platform}
                    username={item.username}
                    metric={item.metric}
                    value={item.value}
                    change={item.change}
                    updown={item.updown}
                  >

                  </Followers>
                </div>
              )
            })

            }
          </div>
          <label className='title1'>Overview - Today</label>

          <div className='Overview'>
            {ArrayOfObject2.map((item2) => {
              return (
                <>
                  <Overview
                    platform={item2.platform}
                    metric={item2.metric}
                    value={item2.value}
                    change={item2.change}
                    updown={item2.updown}
                    key={item2.id}
                    class={item2.class}
                  ></Overview>
                </>
              )
            })}
          </div>

        </div>
      </main>
    </>
  )
}

export default App
