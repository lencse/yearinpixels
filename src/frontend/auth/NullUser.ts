import User from './User'

export default class NullUser implements User {

    public get id(): string {
        return ''
    }

}
