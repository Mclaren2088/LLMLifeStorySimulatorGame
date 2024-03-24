import Game from '../models/Game.js';
 const getAllGames = async(req, res, next) => {
    try{
        const [games,_] = await Game.findAll();
        res.status(200).json({count: games.length, games});
    }catch (error) {
        console.log(error);
        next(error);
    }
}
 const createNewGame = async(req, res, next) => {
    try{
        console.log("createNewGame Entrypoint");
        let {name, gender, location, context} = req.body;
        let game = new Game(name,gender,location,context);
        game = await game.save();
        res.status(201).json({message: "Game created"});
        // ideally send post back
    }catch (error){
        console.log(error);
        next(error);
    }
}
 const getGameById = async(req, res, next) => {
    try{
        let gameID = req.params.id;
        let [game,_] = await Game.findById(gameID);
        res.status(200).json({game: game[0]});
    }catch (error) {
        console.log(error);
        next(error);
    }
}
export default {
    getAllGames,
    createNewGame,
    getGameById
};