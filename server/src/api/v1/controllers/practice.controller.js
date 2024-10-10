import {SuccessResponse} from "../middlewares/success.response.js"
import PracticeService from "../services/practice.service.js"


class PracticeController {
    createNewSample = async (req, res, next) => {
        new SuccessResponse({
            message: 'Create new sample successfully',
            metadata: await PracticeService.createText(req.body)
        }).send(res)
    }
    
    translateText = async (req, res, next) => {
        new SuccessResponse({
            message: 'Sample successfully translateed',
            metadata: await PracticeService.transcriptionText(req.headers['x-client-id'],req.body._id, req.file)
        }).send(res)
    }
}

export default new PracticeController