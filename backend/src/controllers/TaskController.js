import Task from '../models/Task';
import User from '../models/User';

class TaskController {
    async index(req, res){
        try {
            const userId = req.userId;
            const user = User.findById({_id: userId});

        if (!user){
            return res.status(401).json({error: "User not found!"})
        }

            const tasks = await Task.find({user: userId})

            return res.json(tasks);
            
      } catch (error) {
            return res.status(400).json({error: "Something it's wrong, try again!"})
        }
    }

    async show(req, res){
        try {
            const { id } = req.params;
            const task = await Task.findOne({_id:id});
    
            return res.json(task);
        } catch (error) {
            return res.status(401).json({error: "Task not found!"})
        }

    }

    async create(req, res){
        try {
            const userId = req.userId;
            const { title} = req.body;
            const finished = false;
            const created = new Date();
            const updated = new Date();
            
            const user = await User.findById(userId);

            if (!user){
                return res.status(401).json({error: "User not found!"})
            }

            const task = await Task.create({
                title,
                finished,
                user,
                created,
                updated
            });

            return res.json(task);
    
            
        } catch (error) {
            return res.status(401).json({error: "Please, verify all the fields"})
        }

    }

    async update(req, res) {
        const { id } = req.params;
        const userId = req.userId;
        const {
          title,
          finished
        } = req.body;
        
        const user = await User.findById(userId);
        const task = await Task.findById(id);
        
        if (!user){
            return res.status(401).json({error: "User not found!"})
        }
        
        if(!task){
            return res.status(401).json({error: "Task not found!"})
        }

        const updated = Date.now();
        
        const taskUpdated = await Task.updateOne(
          { _id: id },
          {title,
          finished,
          user,
          updated
          }
        );
    
        return res.send(taskUpdated);
      }

    async delete(req, res) {
        const { id } = req.params;

        try{
            await Task.findByIdAndDelete(id);
            return res.json({ message: 'Task successfully deleted' });

        }catch(err){
            return res.status(400).json({ message: err });

        }
      }

      async showPendindTasks(req, res){
        try {
            const userId = req.userId;
            const user = User.findById({_id: userId});

        if (!user){
            return res.status(401).json({error: "User not found!"})
        }

            const tasks = await Task.find({user: userId, finished: false})

            return res.json(tasks);
            
      } catch (error) {
            return res.status(400).json({error: "Something it's wrong, try again!"})
        }
    }


    async showCompletedTasks(req, res){
        try {
            const userId = req.userId;
            const user = User.findById({_id: userId});

        if (!user){
            return res.status(401).json({error: "User not found!"})
        }

            const tasks = await Task.find({user: userId, finished: true})

            return res.json(tasks);
            
      } catch (error) {
            return res.status(400).json({error: "Something it's wrong, try again!"})
        }
    }  
    
    async changeStatusTask(req, res){
        try {
            const { id } = req.params;
            const userId = req.userId;

            const user = await User.findById(userId);
            const task = await Task.findById(id);
            
            if (!user){
                return res.status(401).json({error: "User not found!"})
            }
            
            if(!task){
                return res.status(401).json({error: "Task not found!"})
            }

            const updated = Date.now();

            let finished = false


            if (!task.finished){
                finished = true
            }
        
            const taskUpdated = await Task.updateOne(
            { _id: id },
            {title: task.title,
            finished: finished,
            user,
            updated
            }
            );
        
            return res.send(taskUpdated);
        } catch (error) {
            return res.status(400).json({error: "Something it's wrong, try again!"})
        }
    }

      
}

export default TaskController;