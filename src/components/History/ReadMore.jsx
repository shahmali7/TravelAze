import React from 'react'
import ReactReadMoreReadLess from "react-read-more-read-less";
import './History.css'

const ReadMore = ({children,name}) => {
    return (
        <div className='CityHistory'>
        <h2>{name}</h2>
          <ReactReadMoreReadLess
              charLimit={270}
              readMoreText={<button>Read more ▼ </button>}
              readLessText={<button>Read less ▲</button>}
              readMoreClassName='MoreText'
          >
              {children}
          </ReactReadMoreReadLess>
        </div>
    );
}

export default ReadMore