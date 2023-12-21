import { SortByLevel } from '../../const';
import SortingByLevelElement from '../sorting-by-level-element/sorting-by-level-element';

export default function SortingByLevel () {
  return (
    <ul className="filter__list">
      {Object.keys(SortByLevel).map((sort) => <SortingByLevelElement key={sort} sort={sort}/>)}
    </ul>

  );
}
