import { Helmet } from 'react-helmet-async';
import Footer from '../../componets/footer/footer';
import Header from '../../componets/header/header';
import { QuestsMinArrayType } from '../../types/type-quest';
import ListQuests from '../../componets/list-quests/list-quests';
import SortingByType from '../../componets/sorting-by-type/sorting-by-type';
import SortingByLevel from '../../componets/sorting-by-level/sorting-by-level';
import { useState } from 'react';
import { SortByType } from '../../const';

type PageMainProp = {
  prop: QuestsMinArrayType;
}

export default function PageMain ({prop}: PageMainProp) {

  const [sortType, setSortType] = useState(SortByType.all);

  function handleChangeSort (sort: string) {
    setSortType(SortByType[sort]);
  }

  return (
    <div className="wrapper">
      <Header />
      <Helmet>
        <title>Escape Room</title>
      </Helmet>
      <main className="page-content">
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle page-content__subtitle">
        Квесты в Санкт-Петербурге
            </h1>
            <h2 className="title title--size-m page-content__title">
        Выберите тематику
            </h2>
          </div>
          <div className="page-content__item">
            <form className="filter" action="#" method="get">
              <fieldset className="filter__section">
                <legend className="visually-hidden">Тематика</legend>
                <SortingByType onChange={handleChangeSort} />
              </fieldset>
              <fieldset className="filter__section">
                <legend className="visually-hidden">Сложность</legend>
                <SortingByLevel />
              </fieldset>
            </form>
          </div>
          <h2 className="title visually-hidden">Выберите квест</h2>
          <div className="cards-grid">
            <ListQuests propQuests = {prop} sortType = { sortType} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
