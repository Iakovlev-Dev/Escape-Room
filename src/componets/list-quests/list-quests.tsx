import { QuestsMinArrayType } from '../../types/type-quest';
import QuestCard from '../quest-card/quest-card';

type ListQuestsType = {
    propQuests: QuestsMinArrayType;
}

export default function ListQuests ({ propQuests }: ListQuestsType) {

  return (
    <>
      {propQuests.map((quest) => <QuestCard key={quest.id} quest={quest}/>)}
    </>
  );
}
