import Server from '../../../../../src/server/infrastructure/server/Server'

describe('Server', () => {
    it('Serving static dir from /public', async () => {
        const webserver = {
            public: null,
            running: false,
            staticDir(dir: string): void {
                this.public = dir
            },
            run(): void {
                this.running = true
            }
        }
        const server = new Server(webserver)
        server.run()
        expect(webserver.public).toEqual('./public')
        expect(webserver.running).toEqual(true)
    })
})
