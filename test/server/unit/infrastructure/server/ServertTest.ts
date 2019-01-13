import Server from '../../../../../src/server/infrastructure/server/Server'
import Webserver from '../../../../../src/server/infrastructure/server/Webserver'

describe('Server', () => {
    it('Serving static dir from /public', async () => {
        const webserver = {
            dir: null,
            running: false,
            portNumber: null,
            staticDir(dir: string): void {
                this.dir = dir
            },
            run(portNumber: number): void {
                this.running = true
                this.portNumber = portNumber
            }
        }
        // const webserver = new MockWebserver()
        const server = new Server(80, webserver)
        server.run()
        expect(webserver.dir).toEqual('./public')
        expect(webserver.running).toEqual(true)
        expect(webserver.portNumber).toEqual(80)
    })
})
