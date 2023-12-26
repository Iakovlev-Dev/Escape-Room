import { AuthorisaionStatus, NameSpace } from '../../const';
import { StateType } from '../../types/type-store';


export const selectActiveSortType = (state: StateType) => state[NameSpace.Data].sortType;
export const selectActiveSortLevel = (state: StateType) => state[NameSpace.Data].sortLevel;
export const selectQuests = (state: StateType) => state[NameSpace.Data].quests;
export const selectBooking = (state: StateType) => state[NameSpace.Data].booking;
export const selectCurrentQuest = (state: StateType) => state[NameSpace.Data].quest;
export const selectAuthStatus = (state: StateType) => state[NameSpace.Data].authorizationStatus;
export const isUserAuthorezed = (state: StateType) => state[NameSpace.Data].authorizationStatus === AuthorisaionStatus.Auth;
export const selectCurrentBooking = (state: StateType) => state[NameSpace.Data].currentBooking;
export const selectMyReservation = (state: StateType) => state[NameSpace.Data].myReservation;
export const selectQuestId = (state: StateType) => state[NameSpace.Data].questId;
export const selectQuestPlaceId = (state:StateType) => state[NameSpace.Data].questPlaceId;
export const selectCoordsQuestPlaces = (state: StateType) => state[NameSpace.Data].coords;
