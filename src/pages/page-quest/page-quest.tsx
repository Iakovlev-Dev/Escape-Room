import { Helmet } from 'react-helmet-async';
import Footer from '../../componets/footer/footer';
import Header from '../../componets/header/header';
import { Link, useParams } from 'react-router-dom';
import { SortByLevel } from '../../const';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectCurrentQuest } from '../../store/data-process/selectors';
import { fetchBookingAction, fetchQuestAction } from '../../store/api-action';
import { useEffect } from 'react';
import { setQuestId } from '../../store/data-process/data-process';

export default function PageQuest () {
  const dispatch = useAppDispatch();

  const {id} = useParams();
  const pathQuest = `/quest/${id as string}/booking`;

  useEffect(() => {
    dispatch(fetchBookingAction(id as string));
    dispatch(fetchQuestAction(id as string));
    dispatch(setQuestId(id as string));
  }, [dispatch, id]);

  const currentQuest = useAppSelector(selectCurrentQuest);

  return (

    <div className="wrapper">
      <Header />
      <Helmet>
        <title>Escape Room. Quest</title>
      </Helmet>
      { currentQuest &&
      <main className="decorated-page quest-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source
              type="image/webp"
              srcSet={currentQuest.coverImgWebp}
            />
            <img
              src={currentQuest.coverImg}
              srcSet={currentQuest.coverImg}
              width={1366}
              height={768}
              alt={currentQuest.title}
            />
          </picture>
        </div>
        <div className="container container--size-l">
          <div className="quest-page__content">
            <h1 className="title title--size-l title--uppercase quest-page__title">
              {currentQuest.title}
            </h1>
            <p className="subtitle quest-page__subtitle">
              <span className="visually-hidden">Жанр:</span>Ужасы
            </p>
            <ul className="tags tags--size-l quest-page__tags">
              <li className="tags__item">
                <svg width={11} height={14} aria-hidden="true">
                  <use xlinkHref="#icon-person" />
                </svg>
                {currentQuest.peopleMinMax[0]} – {currentQuest.peopleMinMax[1]}&nbsp;чел
              </li>
              <li className="tags__item">
                <svg width={14} height={14} aria-hidden="true">
                  <use xlinkHref="#icon-level" />
                </svg>
                {currentQuest && SortByLevel[currentQuest.level]}
              </li>
            </ul>
            <p className="quest-page__description">{currentQuest.description}</p>
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
