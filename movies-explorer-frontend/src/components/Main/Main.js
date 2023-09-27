import React from "react";
import Promo from "../Main/Promo/Promo";
import NavTab from "../Main/NavTab/NavTab";
import AboutProject from "../Main/AboutProject/AboutProject";
import Techs from "../Main/Techs/Techs";
import AboutMe from "../Main/AboutMe/AboutMe";
import Portfolio from "../Main/Portfolio/Portfolio";
import Foto from "../Foto/Foto";
import DipolomSection from './Diplom/DipolomSection/DipolomSection';

function Main({
  onCardClick,
}) {
  return (
    <>
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <DipolomSection onCardClick={onCardClick} />

      <Portfolio />
    </>
  );
}

export default Main;
