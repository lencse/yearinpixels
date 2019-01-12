const config = {
    dev: {
        driver: 'pg',
        url: process.env.DATABASE_CONNECTION_URL || process.env.DATABASE_URL
    },
    prod: {
        driver: 'pg',
        url: process.env.DATABASE_CONNECTION_URL || process.env.DATABASE_URL,
        addIfNotExists: {
            sslmode: 'require'
        }
    }
}

console.info(config)

module.exports = config
