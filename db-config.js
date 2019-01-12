module.exports = {
    dev: {
        driver: 'pg',
        url: process.env.DATABASE_CONNECTION_URL
    },
    prod: {
        driver: 'pg',
        url: process.env.DATABASE_CONNECTION_URL,
        addIfNotExists: {
            sslmode: 'require'
        },
        overwrite: {
            native: true
        }
    }
}
