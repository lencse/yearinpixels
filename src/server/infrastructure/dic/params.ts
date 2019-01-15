export const TYPES = {
    Webserver: Symbol('Webserver'),
    CreateUser: Symbol('CreateUser'),
    UserSaver: Symbol('UserSaver'),
    UuidGenerator: Symbol('UuidGenerator')
}

export const SCALARS = {
    Webserver: {
        PortNumber: Symbol('PortNumber')
    },
    PgConnection: {
        dbUrl: Symbol('dbUrl')
    }
}
