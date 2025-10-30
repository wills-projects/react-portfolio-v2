import React from 'react'

function Loader({ isFadingOut = false }) {
  return (
    <div className={`loader${isFadingOut ? ' fade-out' : ''}`}>
      <div className="loader_inner">
        <div className="loader_text">
          <span className="name">William Lee</span> <span className="title">Portfolio</span>
        </div>
      </div>
    </div>
  )
}

export default Loader


