import React from 'react'

import { latest } from './data'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import axios from 'axios'
const Images = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [inputType, setInputType] = useState('')
  const [ImagesReceived, setImagesReceived] = useState([])
  const [showdata, setShowdata] = useState(true)

  const onFormSubmit = async (e) => {
    e.preventDefault()
    const url = `https://pixabay.com/api/?key=22880173-5f352ee7dc8379dfbe68cf331&q=${inputType}&image_type=photo`
    const response = await axios.get(url)

    setImagesReceived(response.data.hits)

    setShowdata(false)
  }

  return (
    <>
      {showdata ? (
        <div className='super-section'>
          <div className='super-container' onClick={() => setShowMenu(false)}>
            <div className='form1-container'>
              <div className='form2'>
                <form className='ui form' onSubmit={onFormSubmit}>
                  <input
                    type='text'
                    placeholder='Search for images'
                    className='form2-input'
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
                  onMouseOver={() => {
                    setShowMenu(true)
                  }}
                >
                  <div className='text'>Categories</div>
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
                          <NavLink to='#'>Architecture</NavLink>
                        </div>
                        <div
                          className='item'
                          on
                          style={{ paddingLeft: '10px', paddingBottom: '10px' }}
                        >
                          <NavLink to='/#'>Computer</NavLink>
                        </div>
                        <div
                          className='item'
                          on
                          style={{ paddingLeft: '10px', paddingBottom: '10px' }}
                        >
                          <NavLink to='#'>Education</NavLink>
                        </div>
                        <div
                          className='item'
                          on
                          style={{ paddingLeft: '10px', paddingBottom: '10px' }}
                        >
                          <NavLink to='#'>Health</NavLink>
                        </div>
                        <div
                          className='item'
                          on
                          style={{ paddingLeft: '10px', paddingBottom: '10px' }}
                        >
                          <NavLink to='#'>Music</NavLink>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* images in images */}
          <div className='super-content'>
            <div className='super-images'>
              {latest.map((latest) => {
                const { id, img } = latest
                return (
                  <article key={id} className='gallery'>
                    <img src={img} className='photo' alt='' />
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className='content'>
          <div className='all-container'>
            {ImagesReceived.map((image) => {
              const { id, webformatURL, tags } = image
              return (
                <article key={id} className='photo-container'>
                  <img src={webformatURL} className='img' alt='' />
                  <h4 style={{ paddingTop: '18.5rem', fontSize: '10px' }}>
                    {tags}
                  </h4>
                </article>
              )
            })}
          </div>
        </div>
      )}
    </>
  )
}
export default Images
