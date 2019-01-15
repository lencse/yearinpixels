import { Serializer } from 'ts-jsonapi'

export const userSerializer = new Serializer('users', {
    id: 'id',
    attributes: []
})
