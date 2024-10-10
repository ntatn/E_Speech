import express from 'express'
import topicController from '../../controllers/topic.controller.js'
import { asyncHandler } from '../../helpers/asyncHandler.js'
import { authentication } from '../../auth/authUtils.js'
const router = express.Router()
router.use(authentication)
router.get('/', asyncHandler(topicController.findAllTopic))
router.get('/:id', asyncHandler(topicController.findOneTopic))
router.post('/', asyncHandler(topicController.createNewTopic))
router.patch('/:id', asyncHandler(topicController.updateOneTopic))
router.delete('/:id', asyncHandler(topicController.deleteOneTopic))

export default router