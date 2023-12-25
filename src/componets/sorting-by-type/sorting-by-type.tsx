import { SortType } from '../../const';
import SortingByTypeElement from '../sort-by-type-element/sort-by-type-element';

export default function SortingByType () {
  return (
    <ul className="filter__list">
      {Object.values(SortType).map((sort) => <SortingByTypeElement key={sort} sort={sort}/>)}
    </ul>
  );
}
