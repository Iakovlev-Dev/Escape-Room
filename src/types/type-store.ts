import { store } from '../store';
import { BookingInfoType } from './type-booking';
import { QuestMaxType, QuestMinType, QuestsMinArrayType } from './type-quest';
import { ReservationType } from './type-reservation';

export type DataProcess = {
    quests: QuestsMinArrayType;
    sortType: string;
    sortLevel: string;
    booking: BookingInfoType[] | null;
    currentBooking: null | BookingInfoType;
    quest: QuestMaxType | null;
    authorizationStatus: string;
    myReservation: ReservationType[] | null;
    questPlaceId: BookingInfoType['id'] | null;
    coords: BookingInfoType['location']['coords'] | [];
    questId: QuestMinType['id'] | null;
};

export type StateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
