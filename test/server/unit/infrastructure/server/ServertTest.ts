import Server from '../../../../../src/server/server/Server'
import CreateUser from '../../../../../src/server/auth/CreateUser'

describe('Server', () => {
    it('Serving static dir from /public', async () => {
        // const webserver = {
        //     dir: null,
        //     running: false,
        //     portNumber: null,
        //     staticDir(dir: string): void {
        //         this.dir = dir
        //     },
        //     run(portNumber: number): void {
        //         this.running = true
        //         this.portNumber = portNumber
        //     },
        //     createUserPath(path: string, action: CreateUser): void {
        //     }
        // }

        // const server = new Server(80, webserver, new CreateUser())
        // server.run()

        // expect(webserver.dir).toEqual('./public')
        // expect(webserver.running).toEqual(true)
        // expect(webserver.portNumber).toEqual(80)
    })
})
