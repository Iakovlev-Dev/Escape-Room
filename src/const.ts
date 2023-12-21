export enum AppRoute {
    Main = '/',
    Login = '/login',
    Reservation = '/reservation',
    Quest = '/quest/:id',
    Booking = '/quest/:id/booking',
    Contacts = '/contacts'
}

export enum AuthorisaionStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknow = 'UNKNOW'
}

export const SortByType = {
  all: 'Все квесты',
  adventure: 'Приключения',
  horror: 'Ужасы',
  mystic: 'Мистика',
  detective: 'Детектив',
  sciFi: 'Sci-fi'
};

export const SortByLevel = {
  any: 'Любой',
  easy: 'Легкий',
  middle: 'Средний',
  hard: 'Сложный',
};

export const LevelQuest = {
  easy: 'Легкий',
  medium: 'Средний',
  hard: 'Сложный'
};
