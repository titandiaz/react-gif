import React from 'react'
import PropTypes from 'prop-types'

export const GifGridItem = ({id, title, url}) => {
  return (
    <div className="flex flex-col">
      <img className="rounded-t-md" src={url} alt={title}/>
      <p className="font-light text-xs p-3 border rounded-b-md">{title}</p>
    </div>
  )
}

GifGridItem.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string
}