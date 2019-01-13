import * as Koa from 'koa'
import * as Router from 'koa-router'
import * as json from 'koa-json'
import * as serve from 'koa-static'
import 'reflect-metadata'
import { injectable } from 'inversify'
import { SCALARS } from '../dic/params'
import Webserver from './Webserver'

@injectable()
export default class KoaWebserver implements Webserver {

    private koa: Koa

    private router: Router

    constructor() {
        this.koa = new Koa()
        this.router = new Router()
    }

    public staticDir(dir: string) {
        this.koa.use(serve(dir))
    }

    public run(portNumber: number): void {
        this.koa.use(json())
            .use(this.router.routes())
            .use(this.router.allowedMethods())

        this.koa.listen(portNumber)
        console.info(`Started webserver: http://localhost:${portNumber}`)
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
