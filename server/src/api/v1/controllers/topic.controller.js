import {SuccessResponse} from "../middlewares/success.response.js"
import TopicService from "../services/topic.service.js"

class TopicController {

    createNewTopic = async (req, res, next) => {
        new SuccessResponse({
            message: 'Create new topic successfully',
            metadata: await TopicService.createTopics(req.body)
        }).send(res)
    }

    findAllTopic = async (req, res, next) => {
        new SuccessResponse({
            message: 'Find all topics successfully',
            metadata: await TopicService.getAllTopics(req.query)
        }).send(res)
    }

    findOneTopic = async (req, res, next) => {
        new SuccessResponse({
            message: 'Find one topic successfully',
            metadata: await TopicService.findByTopicId(req.params.id)
        }).send(res)
    }

    updateOneTopic = async (req, res, next) => {
        new SuccessResponse({
            message: 'Update topic successfully',
            metadata: await TopicService.updateTopic(req.params.id, {...req.body})
        }).send(res)
    }

    deleteOneTopic = async (req, res, next) => {
        new SuccessResponse({
            message: 'Delete topic successfully',
            metadata: await TopicService.removeTopic(req.params.id)
        }).send(res)
    }
}

export default new TopicController