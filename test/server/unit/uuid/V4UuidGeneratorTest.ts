import V4UuidGenerator from '../../../../src/server/uuid/V4UuidGenerator'

describe('V4UuidGenerator', () => {
    it('V4 uuid format', () => {
        const uuid = new V4UuidGenerator()
        expect(uuid.generate()).toMatch(/\b[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}\b/)
    })
    it('Different uuids', () => {
        const uuid = new V4UuidGenerator()
        expect(uuid.generate() === uuid.generate()).toBeFalsy()
    })
})
