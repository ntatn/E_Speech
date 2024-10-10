import { Schema, model } from 'mongoose'

const COLLECTION_NAME = 'Samples'

const sampleSchema = new Schema({
    topicId: {
        type: Schema.Types.ObjectId,
        ref: 'Topic'
    },
    sampleText: {
        type: String,
        maxLength: 255
    },
    word: {
        type: Array,
        default: []
    }

},  {
    timestamps: true,
    collection: COLLECTION_NAME
})

export default model('Sample', sampleSchema)
