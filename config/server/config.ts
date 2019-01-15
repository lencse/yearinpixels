import { config as dotenvInit } from 'dotenv'

dotenvInit()

const config = {

    portNumber: Number(process.env.PORT),

    dbUrl: String(process.env.DATABASE_URL)

}

export default config
