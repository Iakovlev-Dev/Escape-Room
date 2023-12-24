import { SortByType, SortType } from '../../const';
import { setSortType } from '../../store/data-process/data-process';
import { selectActiveSortType } from '../../store/data-process/selectors';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

type SortTypeProps = {
    sort: string;
}

export default function SortingByTypeElement ({sort}: SortTypeProps) {
  const dispatch = useAppDispatch();

  function handleChangeSortType (sortType: string) {
    dispatch(setSortType(sortType));
  }
  const checkedSortType = useAppSelector(selectActiveSortType);
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
        <span className="filter__label-text">{sort === SortType.SciFi ? 'Sci-fi' : SortByType[sort]}</span>
      </label>
    </li>
  );
}
