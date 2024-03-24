import LLMmodel from '../models/LLMmodel.js';
 const openPrevSession = async(req, res, next) => {
    try{
        const model = new LLMmodel();
        res.status(200).json({wrapperName: model.getWrapperName()});
    }catch (error) {
        console.log(error);
        next(error);
    }
}
 const openNewSession = async(req, res, next) => {
    try{
        const model = new LLMmodel();
        res.status(200).json({wrapperName: model.getWrapperName()});
    }catch (error){
        console.log(error);
        next(error);
    }
}


export default {
    openPrevSession,
    openNewSession
};