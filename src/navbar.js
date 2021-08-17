import React from 'react'
const Navbar = () => {
  return (
    <>
      <nav
        className='ui raised very padded segment'
        style={{ backgroundColor: '#E6E6FA' }}
      >
        <a className='ui teal inverted segment' href='/'>
          Wise Shoot
        </a>
        <div className='ui right floated header'>
          <button className='ui button'>
            <a href='/'> Home </a>
          </button>
          <button className='ui button'>
            <a href='/images'> More Images </a>
          </button>
        </div>
      </nav>
    </>
  )
}
export default Navbar
