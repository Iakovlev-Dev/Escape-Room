import { useState } from 'react';
import { QuestMinType, QuestsMinArrayType } from '../../types/type-quest';
import QuestCard from '../quest-card/quest-card';

type ListQuestsType = {
    propQuests: QuestsMinArrayType;
}

export default function ListQuests ({ propQuests }: ListQuestsType) {
  const [, setHoverQuestId] = useState<QuestMinType['id'] | null>(null);

  function handleQuestHover (questId: QuestMinType['id'] | null) {
    setHoverQuestId(questId);
  }

  return (
    <>
      {propQuests.map((quest) => <QuestCard key={quest.id} quest={quest} onQuestHover={handleQuestHover}/>)}
    </>
  );
}
