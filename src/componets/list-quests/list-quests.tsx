import QuestCard from '../quest-card/quest-card';
import { useAppSelector } from '../../store/hooks';
import { selectActiveSortLevel, selectActiveSortType, selectQuests } from '../../store/data-process/selectors';
import { filterLevel, filterType } from '../../utils';
import { QuestsMinArrayType } from '../../types/type-quest';
import { SortLevel } from '../../const';

export default function ListQuests () {
  const quests = [...useAppSelector(selectQuests)];
  const currentFilterType = useAppSelector(selectActiveSortType);
  const currentFilterLevel = useAppSelector(selectActiveSortLevel);

  function getFilteredQuests (): QuestsMinArrayType {
    const filteredQuests = filterType[currentFilterType](quests);

    switch (currentFilterLevel) {
      case SortLevel.Any:
        return filterLevel[currentFilterLevel](filteredQuests);
      case SortLevel.Easy:
        return filterLevel[currentFilterLevel](filteredQuests);
      case SortLevel.Medium:
        return filterLevel[currentFilterLevel](filteredQuests);
      case SortLevel.Hard:
        return filterLevel[currentFilterLevel](filteredQuests);
    }

    return filteredQuests;
  }

  return (
    <>
      {getFilteredQuests().map((filteredQuest) => <QuestCard key={filteredQuest.id} quest={filteredQuest} />)}
    </>
  );
}
