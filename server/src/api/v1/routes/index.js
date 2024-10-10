import express from 'express'
import access from './access/index.routes.js'
import topic from './learning/topic.routes.js'
import practice from './learning/practice.routes.js'
const router = express.Router()


router.use('/api/v1', access)
router.use('/api/v1/topics', topic)
router.use('/api/v1/practice', practice)
export default router