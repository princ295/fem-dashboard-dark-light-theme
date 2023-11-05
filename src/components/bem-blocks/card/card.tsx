
import "./_card.scss";
import fb from "../../../assets/icon-facebook.svg";
import up from "../../../assets/icon-up.svg";

export const Card = () => {
  return (
    <div className="card card--facebook">
      <div className="card__platfrom flex --just-center --align-center">
        <img className="card__icon" src={fb} alt="" />
        <div className="card__username">@nathanf</div>
      </div>
      <div className="card__follower">
        <div className="card__count  card__count--big">1987</div>
        <div className="card__label">FOLLOWERS</div>
      </div>
      <div className="card__change flex --just-center --align-center ">
        <img src={up} alt="" />
        <div className="card__number">12 Today</div>
      </div>
    </div>
  )
}

