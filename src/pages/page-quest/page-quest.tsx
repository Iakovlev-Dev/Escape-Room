import { Helmet } from 'react-helmet-async';
import Footer from '../../componets/footer/footer';
import Header from '../../componets/header/header';
import { Link, useParams } from 'react-router-dom';
import { QuestsMinArrayType } from '../../types/type-quest';
import { LevelQuest } from '../../const';

type QuestType = {
  prop: QuestsMinArrayType;
}

export default function PageQuest ({prop}: QuestType) {

  const {id} = useParams();

  const pathQuest = `/quest/${id as string}/booking`;

  const selectedQuest = prop.find((quest) => quest.id === id);

  return (

    <div className="wrapper">
      <Header />
      <Helmet>
        <title>Escape Room. Quest</title>
      </Helmet>
      { selectedQuest &&
      <main className="decorated-page quest-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source
              type="image/webp"
              srcSet={selectedQuest.coverImgWebp}
            />
            <img
              src={selectedQuest.coverImg}
              srcSet={selectedQuest.coverImg}
              width={1366}
              height={768}
              alt={selectedQuest.title}
            />
          </picture>
        </div>
        <div className="container container--size-l">
          <div className="quest-page__content">
            <h1 className="title title--size-l title--uppercase quest-page__title">
              {selectedQuest?.title}
            </h1>
            <p className="subtitle quest-page__subtitle">
              <span className="visually-hidden">Жанр:</span>Ужасы
            </p>
            <ul className="tags tags--size-l quest-page__tags">
              <li className="tags__item">
                <svg width={11} height={14} aria-hidden="true">
                  <use xlinkHref="#icon-person" />
                </svg>
                {selectedQuest?.peopleMinMax[0]} – {selectedQuest.peopleMinMax[1]}&nbsp;чел
              </li>
              <li className="tags__item">
                <svg width={14} height={14} aria-hidden="true">
                  <use xlinkHref="#icon-level" />
                </svg>
                {selectedQuest && LevelQuest[selectedQuest.level]}
              </li>
            </ul>
            <p className="quest-page__description">{selectedQuest.description}</p>
            <Link
              className="btn btn--accent btn--cta quest-page__btn"
              to={pathQuest}
            >
        Забронировать
            </Link>
          </div>
        </div>
      </main>}
      <Footer />
    </div>

  );
}
