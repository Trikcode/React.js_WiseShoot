import React from 'react'

import { data } from './data'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import axios from 'axios'
const Home = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [inputType, setInputType] = useState('')
  const [ImagesReceived, setImagesReceived] = useState([])
  const [showdata, setShowdata] = useState(true)

  const onFormSubmit = async (e) => {
    // e.preventDefault()
    const url = `https://pixabay.com/api/?key=22880173-5f352ee7dc8379dfbe68cf331&q=${inputType}&image_type=photo`
    const response = await axios.get(url)

    setImagesReceived(response.data.hits)
    setShowdata(false)
  }

  return (
    <>
      {showdata ? (
        <div className='section-container'>
          <div className='container' onClick={() => setShowMenu(false)}>
            <div
              className='desc'
              style={{ color: 'black', fontFamily: 'cambria' }}
            >
              <h1>Stunning free Images for you</h1>
              <h4 style={{ color: 'rgba(32, 32, 32, 0.911)' }}>
                Over 1.5 million high quality images shared by great talents
                across the globe
              </h4>
            </div>

            <div className='ui fluid action input'>
              <div className='form-container'>
                <div className='search-icon'>
                  <i
                    className='search icon'
                    style={{ fontSize: '1.1rem' }}
                    onClick={() => onFormSubmit()}
                  ></i>
                </div>
                <form className='ui form' onSubmit={onFormSubmit}>
                  <input
                    type='text'
                    placeholder='Search for the right images'
                    className='form-input'
                    style={{ fontSize: '15px' }}
                    value={inputType}
                    onChange={(e) => {
                      setInputType(e.target.value)
                    }}
                  />
                </form>

                <div className='ui basic floating dropdown button'>
                  <div className='text'>Images</div>
                  <i
                    className='dropdown icon'
                    onMouseOver={() => {
                      setShowMenu(true)
                    }}
                  ></i>
                  {showMenu && (
                    <div className='dropdownu'>
                      <div className='content'>
                        <div
                          className='icon'
                          style={{ textAlign: 'right', padding: '5px' }}
                        ></div>

                        <div
                          className='item'
                          style={{ paddingLeft: '10px', paddingBottom: '10px' }}
                        >
                          <Link to='/images'>Illustrations</Link>
                        </div>
                        <div
                          className='item'
                          on
                          style={{ paddingLeft: '10px', paddingBottom: '10px' }}
                        >
                          <Link to='/images'>Images</Link>
                        </div>
                        <div
                          className='item'
                          on
                          style={{ paddingLeft: '10px', paddingBottom: '10px' }}
                        >
                          <Link to='/'>Keep Home</Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className='section-center'>
            {data.map((image) => {
              const { id, img } = image
              return (
                <article key={id} className='gallery'>
                  <img src={img} className='photo' alt='' />
                </article>
              )
            })}
          </div>
        </div>
      ) : (
        //super container
        <div className='super-container' onClick={() => setShowMenu(false)}>
          <div className='form1-container'>
            <div className='form2'>
              <form className='ui form' onSubmit={onFormSubmit}>
                <input
                  type='text'
                  placeholder='Search Images, Music and Videos'
                  style={{ fontSize: '18px', height: '4rem', width: '30rem' }}
                  value={inputType}
                  onChange={(e) => {
                    setInputType(e.target.value)
                  }}
                />
              </form>
            </div>
            <div className='form3'>
              <div
                className='ui basic floating dropdown button'
                style={{ width: '15rem' }}
                onMouseOver={() => {
                  setShowMenu(true)
                }}
              >
                <div
                  className='text'
                  style={{ paddingRight: '5rem', color: 'black' }}
                >
                  Categories
                </div>
                <i className='dropdown icon 1'></i>
                {showMenu && (
                  <div className='dropdownu'>
                    <div className='content'>
                      <div
                        className='icon'
                        style={{ textAlign: 'right', padding: '5px' }}
                      ></div>

                      <div
                        className='item'
                        style={{ paddingLeft: '10px', paddingBottom: '10px' }}
                      >
                        <NavLink to='/'>Animals</NavLink>
                      </div>

                      <div
                        className='item'
                        on
                        style={{ paddingLeft: '10px', paddingBottom: '10px' }}
                      >
                        <NavLink to='/images'>Football</NavLink>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className='all-container'>
            {ImagesReceived.map((image) => {
              const { id, webformatURL, tags } = image
              return (
                <article key={id} className='photo-container'>
                  <img src={webformatURL} className='img' alt='' />
                  <h4 className='me'>{tags}</h4>
                </article>
              )
            })}
          </div>
        </div>
      )}
      <footer>
        <div
          className='just'
          style={{ textAlign: 'center', paddingTop: '2rem' }}
        >
          <hr />
          <div className='info' style={{ paddingTop: '15px' }}>
            <h1 style={{ color: 'rgb(99, 189, 99)' }}>
              Free Images you can use as Wallpaper and designing your site{' '}
            </h1>
            <h4
              style={{
                color: 'rgb(46, 42, 42)',
                fontFamily: 'cursive',
                paddingTop: '1rem',
                overflowWrap: 'break-word',
              }}
            >
              Wise Shoot is a community under Wise Acts Technologies that offers
              you images in high resolutions
            </h4>
            <div className='copyright' style={{ paddingBottom: '3rem' }}>
              <h4>©2021</h4>
            </div>
          </div>
        </div>
      </footer>
      <div
        className='links'
        style={{
          textAlign: 'right',
          paddingBottom: '3rem',
          paddingRight: '3rem',
        }}
      >
        <i class='github icon' style={{ fontSize: '2rem' }}>
          {' '}
          <span>
            <a href='https://github.com/Trikcode'></a>
          </span>
        </i>
        <i class='linkedin icon' style={{ fontSize: '2rem' }}>
          <span>
            <a href='https://www.linkedin.com/in/nobert-ayesiga-a3001896/'></a>
          </span>
        </i>
        <i class='twitter icon' style={{ fontSize: '2rem' }}>
          <span>
            <a href='https://twitter.com/Trikerl'></a>
          </span>
        </i>
      </div>
    </>
  )
}
export default Home
