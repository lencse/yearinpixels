import User from './User'

export default class RealUser implements User {

    private _id: string

    constructor(id: string) {
        this._id = id
    }

    public get id(): string {
        return this._id
    }

}
