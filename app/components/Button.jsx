"use client"
import React from 'react'

const Button = ({content,handle,id,tooltip}) => {
  return (
    <button 
        title={tooltip} 
        className={`border rounded-2xl p-1 ${tooltip==="Delete" ? "hover:border-red-500":"hover:border-yellow-500"}`} 
        onClick={()=>handle(id)}>
            {content}
    </button>
  )
}

export default Button
