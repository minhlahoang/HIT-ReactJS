import React from 'react'
import {YoutubeData} from '../../data'

export const Youtube = () => {
  return (
    <div>
        {
            YoutubeData.map((item, index) => {
                return (
                    <div className="person" key={item.id}>
                        <h1>{item.title}</h1>
                        <h2>{item.author}</h2>
                    </div>
                )
            })
        }
    </div>
  )
}
