export enum AppRoute {
    Main = '/',
    Login = '/login',
    Reservation = '/reservation',
    Quest = '/quest/:id',
    Booking = '/quest/:id/booking',
    Contacts = '/contacts'
}

export enum APIRoute {
  Login = '/v1/escape-room/login',
  Logout = '/v1/escape-room/logout',
  Reservation = '/v1/escape-room/reservation',
  Quest = '/v1/escape-room/quest',
}

export enum AuthorisaionStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknow = 'UNKNOW'
}

export const SortByType: SortBy<string> = {
  all: 'Все квесты',
  adventures: 'Приключения',
  horror: 'Ужасы',
  mystic: 'Мистика',
  detective: 'Детектив',
  sciFi: 'Sci-fi'
};

export const SortType: SortBy<string> = {
  All: 'all',
  Adventures: 'adventures',
  Horror: 'horror',
  Mystic: 'mystic',
  Detective: 'detective',
  SciFi: 'sci-fi'
};
interface SortBy <T>{
  [key: string]: T;
}

export const SortByLevel: SortBy<string> = {
  any: 'Любой',
  easy: 'Легкий',
  medium: 'Средний',
  hard: 'Сложный',
};

export const SortLevel: SortBy<string> = {
  Any: 'any',
  Easy: 'easy',
  Medium: 'medium',
  Hard: 'hard',
};


export const NameSpace = {
  Data: 'DATA'
};

export const CoordsOffice: [number, number] = [59.968142, 30.316425];

export const URL_MARKER_DEFAULT = '../../../markup/img/svg/pin-default.svg';

export const URL_MARKER_CURRENT = '../../../markup/img/svg/pin-active.svg';

