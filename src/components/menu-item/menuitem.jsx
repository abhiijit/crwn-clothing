import React from 'react'
import './menuitem.scss'
import { withRouter } from 'react-router-dom'

const menuitem = ({title, imageURL, size, history, match, linkUrl}) => {
  
  return (
    <>
      <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <div className="background-image" style={{
          backgroundImage: `url(${imageURL})`
      }} />
              <div className="content">
                  <h1 className="title">{title.toUpperCase()}</h1>
                  <span className="subtitle">SHOP NOW</span>
              </div>
          </div>
    </>
  )
}

export default withRouter(menuitem)