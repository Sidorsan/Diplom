import React from 'react';
import Foto from "../../../Foto/Foto";
import DiplomCard from "../DiplomCard/DiplomCard";



function DipolomSection(props) {
    return (
    <section className='dipolomSection'>
      <ul className='dipolomSection__container'>
        {Foto.map((work) => (
          <DiplomCard key={work.id} work={work} onCardClick={props.onCardClick} />
        ))}
      </ul>
    </section>


  );
}

export default DipolomSection;