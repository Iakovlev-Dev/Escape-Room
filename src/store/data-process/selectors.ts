import { NameSpace } from '../../const';
import { State } from '../../types/type-store';


export const selectActiveSortType = (state: State) => state[NameSpace.Data].sortType;
export const selectActiveSortLevel = (state: State) => state[NameSpace.Data].sortLevel;
export const selectQuests = (state: State) => state[NameSpace.Data].quests;
export const selectBooking = (state: State) => state[NameSpace.Data].booking;
export const selectCurrentQuest = (state: State) => state[NameSpace.Data].quest;
