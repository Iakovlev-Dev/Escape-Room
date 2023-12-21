import { Link } from 'react-router-dom';
import { QuestMinType } from '../../types/type-quest';
import { LevelQuest } from '../../const';

type QuestCardType = {
    quest: QuestMinType;
    onQuestHover?: (questId: QuestMinType['id'] | null) => void;
}

export default function QuestCard ({quest, onQuestHover} : QuestCardType) {
  const {level, peopleMinMax, previewImg, previewImgWebp, title, id} = quest;
  const pathQuest = `/quest/${id}`;

  function handleMouseEnter () {
    onQuestHover?.(id);
  }

  function handleMouseLeave () {
    onQuestHover?.(null);
  }

  return (
    <div className="quest-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="quest-card__img">
        <picture>
          <source
            type="image/webp"
            srcSet={previewImgWebp}
          />
          <img
            src={previewImg}
            srcSet={previewImg}
            width={344}
            height={232}
            alt={title}
          />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <Link className="quest-card__link" to={pathQuest}>
            {title}
          </Link>
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width={11} height={14} aria-hidden="true">
              <use xlinkHref="#icon-person" />
            </svg>
            {peopleMinMax[0]}–{peopleMinMax[1]}&nbsp;чел
          </li>
          <li className="tags__item">
            <svg width={14} height={14} aria-hidden="true">
              <use xlinkHref="#icon-level" />
            </svg>
            {LevelQuest[level]}
          </li>
        </ul>
      </div>
    </div>
  );
}
