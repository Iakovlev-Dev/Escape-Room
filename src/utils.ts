import { SortLevel, SortType } from './const';
import { QuestsMinArrayType } from './types/type-quest';

export const filterType = {
  [SortType.All]: (quests: QuestsMinArrayType) => quests,
  [SortType.Adventures]: (quests: QuestsMinArrayType) => quests.filter((quest) => quest.type === SortType.Adventures),
  [SortType.Horror]: (quests: QuestsMinArrayType) => quests.filter((quest) => quest.type === SortType.Horror),
  [SortType.Detective]: (quests: QuestsMinArrayType) => quests.filter((quest) => quest.type === SortType.Detective),
  [SortType.Mystic]: (quests: QuestsMinArrayType) => quests.filter((quest) => quest.type === SortType.Mystic),
  [SortType.SciFi]: (quests: QuestsMinArrayType) => quests.filter((quest) => quest.type === SortType.SciFi)
};

export const filterLevel = {
  [SortLevel.Any]: (quests: QuestsMinArrayType) => quests,
  [SortLevel.Easy]: (quests: QuestsMinArrayType) => quests.filter((quest) => quest.level === SortLevel.Easy),
  [SortLevel.Medium]: (quests: QuestsMinArrayType) => quests.filter((quest) => quest.level === SortLevel.Medium),
  [SortLevel.Hard]: (quests: QuestsMinArrayType) => quests.filter((quest) => quest.level === SortLevel.Hard),
};
