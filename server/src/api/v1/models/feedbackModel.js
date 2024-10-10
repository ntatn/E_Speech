import { Schema, model } from 'mongoose'

const COLLECTION_NAME = 'feedbacks'

const feedbackSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    practiceId: {
        type: Schema.Types.ObjectId,
        ref: 'Practice'
    },
    message: {
        type: String,
        required: true
    },
    sugguestions: {
        type: Array,
        default: []
    }

},  {
    timestamps: true,
    collection: COLLECTION_NAME
})

export default model('Feedback', feedbackSchema)
