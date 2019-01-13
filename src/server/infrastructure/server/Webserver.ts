export default interface Webserver {

    staticDir(dir: string): void

    run(): void

}
