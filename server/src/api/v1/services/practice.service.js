import practiceModel from '../models/practiceModel.js'
import sampleModel from '../models/sampleModel.js'
import { BadRequestError} from '../middlewares/error.response.js'
import { getIntoData } from '../utils/index.js'
import {Types} from "mongoose"
import { CREATED } from '../middlewares/success.response.js'
import { AssemblyAI } from 'assemblyai'
import 'dotenv/config'
class PracticeService {

    static createText = async ({topicId, phonemesText}) => {
        const words = await phonemesText.toLowerCase().replace(/[.,?!]/g, '').split(/\s+/)
        const newSample = await sampleModel.create({
            topicId: topicId,
            sampleText: phonemesText,
            word: words
        })
        if (newSample) {
            return getIntoData({fileds: ['_id', 'sampleText', 'word'], object: newSample})
        }
        if (newSample) {
            return new BadRequestError
        }
    }
    
    static transcriptionText = async (userId, sampleId, trans) => {

            const client = new AssemblyAI({
                apiKey: process.env.ASSEMBLYAI_API_KEY,
            })
            
            const data = {
                audio: trans.path,
            }
            const transcript = await client.transcripts.transcribe(data)
            const highLight = []
            const words = transcript.words
            const sample = await sampleModel.findOne({_id: new Types.ObjectId(sampleId)}).lean()
            let totalConfidence = 0 
            let currentIndex = 0
            words.map((word) => {
                if(sample.word[currentIndex] === word.text.toLowerCase().replace(/[.,?!]/g, '')){
                    if(word.confidence < 0.75){
                        highLight.push(`<span style="color: red;">${sample.word[currentIndex]}</span>`)
                        totalConfidence += word.confidence
                    }else if(word.confidence > 0.9){
                        highLight.push(`<span style="color: green;">${sample.word[currentIndex]}</span>`)
                        totalConfidence += word.confidence
                    }else{
                        highLight.push(`<span style="color: yellow;">${sample.word[currentIndex]}</span>`)
                        totalConfidence += word.confidence
                    }
                    currentIndex++
                }else{
                    highLight.push(`<span style="color: red;">${sample.word[currentIndex]}</span>`)
                    currentIndex++
                }
            })
            const averageConfidence = totalConfidence / words.length;
            
            return new CREATED ({
                metadata: {
                    score: averageConfidence,
                    highLight
                }
            })
        

    }



}

export default PracticeService 
