import React from 'react'
import "../section2/Section.css"

function Section() {
    return (
       <>
             <div className='sectionBox'>
                  <div className='title'>
                    <button >Featured</button>
                    <br /><br />
                    <h5>Beached to take you
                        <br /> somewhere else</h5>
                    <br />
                        <img src="src/assets/Meta.svg" alt="" />
                  </div>
                  <br />
                  <div className='img'>
                    <img src="src/assets/Black.png" alt="" />
                  </div>
            </div>
       </>
    )
}

export default Section