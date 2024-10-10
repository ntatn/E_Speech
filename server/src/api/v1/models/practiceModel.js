import {Schema, model } from 'mongoose'

const COLLECTION_NAME = 'Practices'

const practiceSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    sampleId: {
        type: Schema.Types.ObjectId,
        ref: 'Sample'
    },
    transcription: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    }
},  {
    timestamps: true,
    collection: COLLECTION_NAME
})

export default model('Practice', practiceSchema)