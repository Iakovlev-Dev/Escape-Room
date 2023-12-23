import { AuthorisaionStatus } from '../const';
import { store } from '../store';
import { BookingInfoType } from './type-booking';
import { QuestMaxType, QuestsMinArrayType } from './type-quest';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type DataProcess = {
    quests: QuestsMinArrayType;
    sortType: string;
    sortLevel: string;
    authorizationStatus: string;
    booking: BookingInfoType[] | null;
    quest: QuestMaxType | null;
};

export type UserProcess = {
    authorizationStatus: AuthorisaionStatus;
}
