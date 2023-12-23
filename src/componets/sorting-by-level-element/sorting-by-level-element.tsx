import { SortByLevel } from '../../const';
import { changeSortByLevel } from '../../store/action';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

type SortLevelElement = {
    sort: string;
}

export default function SortingByLevelElement ({sort} : SortLevelElement) {

  const dispatch = useAppDispatch();

  function handleChangeSortLevel (sortType: string) {
    dispatch(changeSortByLevel(sortType));
  }
  const checkedSortLevel = useAppSelector((state) => state.sortLevel);
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
