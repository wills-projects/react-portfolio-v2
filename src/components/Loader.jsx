import React from 'react'

function Loader({ isFadingOut = false }) {
  return (
    <div className={`loader${isFadingOut ? ' fade-out' : ''}`} aria-label="Loading">
      <div className="loader__inner">
        <div className="loader__text">William Lee Portfolio</div>
      </div>
    </div>
  )
}

export default Loader


