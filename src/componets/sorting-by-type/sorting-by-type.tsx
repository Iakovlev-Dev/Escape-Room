import { SortByType } from '../../const';
import SortingByTypeElement from '../sort-by-type-element/sort-by-type-element';

type SortingType = {
  onChange: (sort: string) => void;
}

export default function SortingByType ({onChange}: SortingType) {
  return (
    <ul className="filter__list">
      {Object.keys(SortByType).map((sort) => <SortingByTypeElement key={sort} sort={sort} onChange={onChange}/>)}
    </ul>
  );
}
