import { Schema, model } from "mongoose"

const COLLECTION_NAME = "Topics"

const topicSchema = new Schema({
    
    title: {
        type: String,
        trim: true,
        maxLength: 100
    },
    description: {
        type: String,
        maxLength: 255
    }

},  {
    timestamps: true,
    collection: COLLECTION_NAME
})

export default model('Topic', topicSchema)