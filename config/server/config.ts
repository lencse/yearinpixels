import { config as dotenvInit } from 'dotenv'

dotenvInit()

const config = {

    portNumber: Number(process.env.PORT)

}

export default config
