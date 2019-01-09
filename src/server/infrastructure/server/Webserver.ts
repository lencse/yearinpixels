import * as Koa from 'koa'
import * as Router from 'koa-router'
import * as json from 'koa-json'
import 'reflect-metadata'
import { injectable, inject } from 'inversify'
import { SCALARS } from '../dic/params'

@injectable()
export default class Webserver {

    private koa: Koa

    private router: Router

    constructor(
        @inject(SCALARS.Webserver.PortNumber) private portNumber: number
    ) {
        this.koa = new Koa()
        this.router = new Router()
        this.setup()
    }

    public run(): void {
        this.koa.use(json())
            .use(this.router.routes())
            .use(this.router.allowedMethods())

        this.koa.listen(this.portNumber)
        console.info(`Started webserver: http://localhost:${this.portNumber}`)
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
