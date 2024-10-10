import topic from '../models/topicModel.js'
import { BadRequestError } from '../middlewares/error.response.js'
import {Types} from "mongoose"
import { getIntoData } from '../utils/index.js'
class TopicService {

    static createTopics = async ({title, description}) =>{
        const hasTopic = await topic.findOne({ title }).lean()
        if(hasTopic){
            throw new BadRequestError('Topic already exists')
        }
        const newTopic = await topic.create({
            title, description
        })
        return newTopic
    }

    static findByTopicId = async (topicId) =>{
        console.log(topicId)
        return await topic.findOne({_id: new Types.ObjectId(topicId) }).lean()
    }

    static getAllTopics = async () =>{
        const allTopics = await topic.find()
        return {topic: getIntoData({fileds: ['title'], object: allTopics})}
    }

    static updateTopic = async (topicId, bodyUpdate) => {
        await topic.findByIdAndUpdate({_id: new Types.ObjectId(topicId)})
    }

    static removeTopic = async (topicId) => {
        await topic.findByIdAndDelete({_id: new Types.ObjectId(topicId)})
    }
}

export default TopicService