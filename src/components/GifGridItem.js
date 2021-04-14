import React from 'react'

export const GifGridItem = ({id, title, url}) => {
  return (
    <div className="flex flex-col max-w-[300px]">
      <img src={url} alt={title}/>
      <p className="font-light text-xs p-3 border">{title}</p>
    </div>
  )
}
