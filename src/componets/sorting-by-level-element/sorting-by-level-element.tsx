import { SortByLevel } from '../../const';

type SortLevelElement = {
    sort: string;
}

export default function SortingByLevelElement ({sort} : SortLevelElement) {
  return (
    <li className="filter__item">
      <input type="radio" name="level" id={sort} />
      <label className="filter__label" htmlFor={sort}>
        <span className="filter__label-text">{SortByLevel[sort]}</span>
      </label>
    </li>
  );
}
