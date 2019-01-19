import * as uuidv4 from 'uuid/v4'
import UuidGenerator from './UuidGenerator'
import { injectable } from 'inversify'
import 'reflect-metadata'

@injectable()
export default class V4UuidGenerator implements UuidGenerator {

    public generate(): string {
        return uuidv4()
    }

}
