import userModel from  '../models/userModel.js'

const findByEmail = async ({email, select = {
    email: 1, password: 1, name: 1, status: 1, level: 1
}}) => {
    return await userModel.findOne({email}).select(select).lean()
}

export  { findByEmail }