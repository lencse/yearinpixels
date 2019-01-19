export const TYPES = {
    Webserver: Symbol('Webserver'),
    UserSaver: Symbol('UserSaver'),
    EntrySaver: Symbol('EntrySaver'),
    UuidGenerator: Symbol('UuidGenerator'),
    UserStore: Symbol('UserStore'),
    DayStore: Symbol('DayStore')
}

export const SCALARS = {
    Webserver: {
        PortNumber: Symbol('PortNumber')
    },
    PgConnection: {
        dbUrl: Symbol('dbUrl')
    }
}
