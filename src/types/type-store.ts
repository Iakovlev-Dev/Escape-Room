import { store } from '../store';
import { BookingInfoType } from './type-booking';
import { QuestMaxType, QuestsMinArrayType } from './type-quest';

export type DataProcess = {
    quests: QuestsMinArrayType;
    sortType: string;
    sortLevel: string;
    booking: BookingInfoType[] | null;
    quest: QuestMaxType | null;
    authorizationStatus: string;
};

export type StateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
