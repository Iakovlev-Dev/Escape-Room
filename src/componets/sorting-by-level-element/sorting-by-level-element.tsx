import { SortByLevel } from '../../const';
import { setSortLevel } from '../../store/data-process/data-process';
import { selectActiveSortLevel } from '../../store/data-process/selectors';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

type SortLevelElement = {
    sort: string;
}

export default function SortingByLevelElement ({sort} : SortLevelElement) {

  const dispatch = useAppDispatch();

  function handleChangeSortLevel (sortType: string) {
    dispatch(setSortLevel(sortType));
  }
  const checkedSortLevel = useAppSelector((state) => selectActiveSortLevel(state));
  return (
    <li className="filter__item">
      <input
        type="radio"
        name="level"
        id={sort}
        onChange={()=> {
          handleChangeSortLevel(sort);
        }}
        checked = {checkedSortLevel === sort}
      />
      <label className="filter__label" htmlFor={sort}>
        <span className="filter__label-text">{SortByLevel[sort]}</span>
      </label>
    </li>
  );
}
