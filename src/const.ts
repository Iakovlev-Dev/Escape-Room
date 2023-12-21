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
