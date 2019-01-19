import EntrySavingData from './EntrySavingData'
import EntryData from './EntryData'

export default interface EntrySaver {

    saveEntry(data: EntrySavingData): Promise<EntryData>

}
