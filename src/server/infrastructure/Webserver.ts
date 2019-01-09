import * as Koa from 'koa'
import * as Router from 'koa-router'
import * as json from 'koa-json'

export default class Webserver {

    private koa: Koa

    private router: Router

    constructor() {
        this.koa = new Koa()
        this.router = new Router()
        this.setup()
    }

    public run(): void {
        this.koa.use(json())
            .use(this.router.routes())
            .use(this.router.allowedMethods())

        this.koa.listen(5600)
        console.info(`Started webserver: http://localhost:${5600}`)
    }

    private setup(): void {
        this.router.get('/status', async (ctx: Koa.Context, next) => {
            ctx.body = {
                status: 'OK',
                code: 200
            }
        })
    }

}
