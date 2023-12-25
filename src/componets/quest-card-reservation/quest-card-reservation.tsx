import { SortByLevel } from '../../const';
import { ReservationType } from '../../types/type-reservation';

type QuestCardReservation = {
    reserv: ReservationType;
}

export default function QuestCardReservation ({reserv}: QuestCardReservation) {

  return (
    <div className="quest-card">
      <div className="quest-card__img">
        <picture>
          <source
            type="image/webp"
            srcSet={reserv.quest.previewImgWebp}
          />
          <img
            src={reserv.quest.previewImg}
            srcSet={reserv.quest.previewImg}
            width={344}
            height={232}
            alt={reserv.quest.title}
          />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <a className="quest-card__link" href="quest.html">
            {reserv.quest.title}
          </a>
          <span className="quest-card__info">
                      `[{reserv.date === 'today' ? 'сегодня' : 'завтра'}, {reserv.time}. {reserv.location.address}]`
          </span>
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width={11} height={14} aria-hidden="true">
              <use xlinkHref="#icon-person" />
            </svg>
            {reserv.peopleCount}
          </li>
          <li className="tags__item">
            <svg width={14} height={14} aria-hidden="true">
              <use xlinkHref="#icon-level" />
            </svg>
            {SortByLevel[reserv.quest.level]}
          </li>
        </ul>
        <button
          className="btn btn--accent btn--secondary quest-card__btn"
          type="button"
        >
          Отменить
        </button>
      </div>
    </div>
  );
}
