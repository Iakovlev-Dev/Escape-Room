import { SortByType } from '../../const';
import { changeSortByType } from '../../store/action';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

type SortTypeProps = {
    sort: string;
}

export default function SortingByTypeElement ({sort}: SortTypeProps) {
  const dispatch = useAppDispatch();

  function handleChangeSortType (sortType: string) {
    dispatch(changeSortByType(sortType));
  }
  const checkedSortType = useAppSelector((state) => state.sortType);
  return (
    <li className="filter__item">
      <input type="radio"
        name="type"
        id={sort}
        onChange={() => {
          handleChangeSortType(sort);
        }}
        checked= {checkedSortType === sort}
      />
      <label className="filter__label" htmlFor={sort}>
        <svg
          className="filter__icon"
          width={26}
          height={30}
          aria-hidden="true"
        >
          {sort === 'sciFi' ? <use xlinkHref={'#icon-sci-fi'} /> : <use xlinkHref={`#icon-${sort}`} />}
          {sort === 'all' ? <use xlinkHref={'#icon-all-quests'} /> : <use xlinkHref={`#icon-${sort}`} />}
        </svg>
        <span className="filter__label-text">{SortByType[sort]}</span>
      </label>
    </li>
  );
}
