import React from "react";
import photoStudent from "../../../images/photoStudent.jpg";
const { gitHabLink } = require("../../Constant/Constant");

function AboutMe(props) {
  return (
    <section className="aboutMe" id="aboutMe">
      <h2 className="aboutMe__title">Студент</h2>
      <div className="aboutMe__info">
        <img
          src={photoStudent}
          className="aboutMe__photo"
          alt="Фото студента"
        ></img>
        <div className="aboutMe__info_text">
          <h2 className="aboutMe__info_text_title">Александр</h2>
          <h3 className="aboutMe__info_text_subtitle">
            Фронтенд-разработчик, 42 года
          </h3>
          <p className="aboutMe__info_text_description">
            Я&nbsp;родился в&nbsp;Новокузнецке, закончил факультет автоматизации
            СИБГИУ. Главное достижение в&nbsp;моей профессиональной карьере это строительство и&nbsp;запуск завода в&nbsp;должности главного инженера. Отработал в&nbsp;этой должности 11 лет. Решил кардинально поменять профессию. Закончил курсы Яндекс практикум по&nbsp;профессии Web разработчик. Сейчас подрабатываю на&nbsp;фрилансе. Постоянно обучаюсь в&nbsp;течение последних нескольких лет. В&nbsp;данное время изучаю WordPress. Считаю своим личным достижением это избавление от&nbsp;всех вредных привычек. Веду активный образ жизни. Увлекаюсь кайтсерфингом, сноубордом, катаюсь на&nbsp;моноколесе, играю в&nbsp;настольный теннис.
          </p>
          <a href={gitHabLink} className="aboutMe__info_text_githabLink">
            Github
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
