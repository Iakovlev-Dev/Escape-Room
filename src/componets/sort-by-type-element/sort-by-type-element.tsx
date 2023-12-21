import { SortByType } from '../../const';

type SortTypeProps = {
    sort: string;
    onChange: (sort: string) => void;
}

export default function SortingByTypeElement ({sort, onChange}: SortTypeProps) {

  return (
    <li className="filter__item">
      <input type="radio" name="type" id={sort} onClick={() => onChange(sort)} />
      <label className="filter__label" htmlFor={sort}>
        <svg
          className="filter__icon"
          width={26}
          height={30}
          aria-hidden="true"
        >
          {sort === 'sciFi' ? <use xlinkHref={'#icon-sci-fi'} /> : <use xlinkHref={`#icon-${sort}`} />}
        </svg>
        <span className="filter__label-text">{SortByType[sort]}</span>
      </label>
    </li>
  );
}
