export const getProfile = (req, res )=>{
    try{
        if(req.user){
            const user = req.user ;
            res.status(200).json(user)
        }
        else{
            res.status(400).json({message : "No User Found"})
        }

    }
    catch(error){
        res.status(500).json({message : "Internal Server Error"})
    }
    
}