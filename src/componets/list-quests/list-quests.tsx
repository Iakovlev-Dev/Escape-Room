import { useState } from 'react';
import { QuestMinType } from '../../types/type-quest';
import QuestCard from '../quest-card/quest-card';
import { useAppSelector } from '../../store/hooks';
import { selectQuests } from '../../store/data-process/selectors';

export default function ListQuests () {
  const [, setHoverQuestId] = useState<QuestMinType['id'] | null>(null);

  function handleQuestHover (questId: QuestMinType['id'] | null) {
    setHoverQuestId(questId);
  }

  const quests = useAppSelector((state) => selectQuests(state));

  return (
    <>
      {quests.map((quest) => <QuestCard key={quest.id} quest={quest} onQuestHover={handleQuestHover}/>)}
    </>
  );
}
