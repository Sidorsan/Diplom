function popupImage({ card, onClose }) {

  return (
    <div className={`popupImage popupImage_big_picture ${card ? "popupImage_opened" : ""}`}>
      <div className="popupImage__picture">
        <button
          className="popupImage__close"
          type="button"
          onClick={onClose}
        ></button>
        <img
          src={card ? card.screenshot : ""}
          alt={card ? card.name : ""}
          className="popupImage__image"
        />
        <h2 className="popupImage__title popupImage__title_big_picture">
          {card ? card.name : ""}
        </h2>
      </div>
    </div>
  );
}
export default popupImage;
