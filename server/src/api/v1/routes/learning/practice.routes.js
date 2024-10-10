import express from 'express'
import practiceController from '../../controllers/practice.controller.js'
import { asyncHandler } from '../../helpers/asyncHandler.js'
import uploadMiddleware from '../../middlewares/uploadMiddleware.js'
import { authentication } from '../../auth/authUtils.js'
const router = express.Router()
router.use(authentication)
router.post('/', asyncHandler(practiceController.createNewSample))
router.post('/compare',uploadMiddleware.single('audio'), asyncHandler(practiceController.translateText))

export default router