const { getAllTask, getTaskById, updateTask,createTask, deleteTask } = require('./tasks.controllers')


const getAll =  (req, res) => {
    const data = getAllTask()
    res.status(200).json({
        items: data.length,
        response: data

    })
}

const getById = (req, res) => {
    const id = Number(req.params.id)

    if(id){
        const data = getTaskById(id)
        if(data.id){
            res.status(200).json(data)
        }else {
            res.status(400).json({message: 'Invalid ID'})
        }
    }else {
        res.status(400).json({message: 'Id is not a number'})
    }
}

const create = (req, res) => {
    
    const data = req.body;
    if(data){
        const user = createTask(data)

    res.status(201).json(user)
    }
     
    
    
   
    
}

const deleteT = (req, res) => {
 const id = Number(req.params.id);


    if(id){
        const data = deleteTask(id) 
        res.status(200).json()
    }else{
        res.status(400).json({message:'Invalid ID'})
    }
 
}

const updateT = (req,res) => {
    const id = Number(req.params.id);
    const data = req.body;

    if(id){
        const user = updateTask(data,id);
        if(user.id){
            res.status(200).json()
        }else{
            res.status(400).json({ message: "Missing data" })
        }
        
    }else{
        res.status(400).json({message:'Invalid ID'})
    }
}

module.exports = {
    getAll,
    getById,
    create,
    deleteT,
    updateT,
}