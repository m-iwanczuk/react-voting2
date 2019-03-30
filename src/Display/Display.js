import React from 'react';
import './Display.css';

const Display = (props) => {
  const { firstValueLength, secondValueLength } = props;

  const sumValues = firstValueLength + secondValueLength;

  let firstWidth = Math.round((firstValueLength*100) / sumValues)
  let secondWidth = 100 - firstWidth

  console.log(firstWidth);
  console.log(secondWidth);

  // let firstBar = document.getElementsByClassName("first-value");
  // firstBar.style.width = {firstWidth};

  // let secondBar = document.getElementsByClassName("second-value");
  // secondBar.style.width = {secondWidth};

  if (sumValues === 0) {
    firstWidth = 50
    secondWidth = 50
  }


  return (
    <div className='display-container'>
        <div className='display-bar'>
          <div className='first-value' style={{ flexBasis: firstWidth + '%' }}>{firstWidth}%</div>
          <div className='second-value' style={{ flexBasis: secondWidth + '%' }}>{secondWidth}%</div>
        </div>
    </div>
  )
}



export default Display;