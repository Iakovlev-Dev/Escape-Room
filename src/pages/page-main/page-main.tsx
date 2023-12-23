import { Helmet } from 'react-helmet-async';
import Footer from '../../componets/footer/footer';
import Header from '../../componets/header/header';
import ListQuests from '../../componets/list-quests/list-quests';
import SortingByType from '../../componets/sorting-by-type/sorting-by-type';
import SortingByLevel from '../../componets/sorting-by-level/sorting-by-level';
import { fetchQuestsAction } from '../../store/api-action';
import { useAppDispatch } from '../../store/hooks';


export default function PageMain () {

  const dispatch = useAppDispatch();
  dispatch(fetchQuestsAction());
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
                <SortingByType />
              </fieldset>
              <fieldset className="filter__section">
                <legend className="visually-hidden">Сложность</legend>
                <SortingByLevel />
              </fieldset>
            </form>
          </div>
          <h2 className="title visually-hidden">Выберите квест</h2>
          <div className="cards-grid">
            <ListQuests />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
