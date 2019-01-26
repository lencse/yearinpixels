import * as Koa from 'koa'
import * as Router from 'koa-router'
import * as json from 'koa-json'
import * as serve from 'koa-static'
import 'reflect-metadata'
import { injectable } from 'inversify'
import Webserver from './Webserver'
import CreateUser from '../auth/CreateUser'
import GetUser from '../auth/GetUser'
import CreateEntry from '../calendar/CreateEntry'
import GetDays from '../calendar/GetDays'
import * as bodyParser from 'koa-bodyparser'

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

    public createUser(handler: CreateUser): void {
        this.router.post('/api/user', async (ctx: Koa.Context, next) => {
            const user = await handler.handle()
            ctx.body = user
        })
    }

    public createCalendarEntry(handler: CreateEntry): void {
        this.router.post('/api/calendar-entry', bodyParser(), async (ctx: Koa.Context, next) => {
            const entry = await handler.handle({
                userId: ctx.request.body.userId,
                comment: ctx.request.body.comment,
                mood: Number(ctx.request.body.mood),
                date: new Date(ctx.request.body.date),
                timestamp: Number(ctx.request.body.timestamp)
            })
            ctx.body = entry
        })
    }

    public getUser(handler: GetUser): void {
        this.router.get('/api/user/:id', async (ctx: Koa.Context, next) => {
            const user = await handler.handle({id: ctx.params.id})
            ctx.body = user
        })
    }

    public getDays(handler: GetDays): void {
        this.router.get('/api/calendar-day', async (ctx: Koa.Context, next) => {
            const days = await handler.handle({userId: ctx.query.userId})
            ctx.body = days
        })
    }

    public assemble(): void {
        this.koa.use(json())
            .use(this.router.routes())
            .use(this.router.allowedMethods())
    }

    public run(portNumber: number): void {
        this.koa.listen(portNumber)
        console.info(`Started webserver: http://localhost:${portNumber}`)
    }

    public get app(): any {
        return this.koa
    }

}
