import React from 'react';

function DiplomCard(props) {
  const handleCardClick = () => {
    props.onCardClick(props.work);
  };

  return (
    <li href={props.work.link} className='dipolomSection__item'>
      <img
        className='dipolomSection__item_screenshots'
        src={props.work.screenshot}
        alt={props.work.title}
        onClick={handleCardClick}
      />
      <div className='dipolomSection__item_title'>{props.work.title}</div>
    </li>
  );
}

export default DiplomCard;