import bcrypt from 'bcryptjs';
import User from '../models/User';

class UserController {
    async index(req, res){
        try {
            const users = await User.find();
            return res.json(users);
            
        } catch (error) {
            return res.status(401).json({error: "Something it's wrong, try again!"})
        }
    }

    async show(req, res){
        try {
            const { id } = req.params;
            const user = await User.findOne({_id:id});
    
            return res.json(user);
        } catch (error) {
            return res.status(401).json({error: "User not found!"})
        }

    }

    async create(req, res){
        try {
            const { name, email, password } = req.body;
            const created = new Date();
            const updated = new Date(); 
    
            let user = await User.findOne({ email });
    
            if (user){
                return res.status(409).json({ error: 'User already exists' });
            }
    
            const passwordHash = await bcrypt.hash(password, 8);
    
            user = await User.create({
                name,
                email,
                password: passwordHash,
                created,
                updated
            });
    
            delete user.password;
    
            return res.json(user);
            
        } catch (error) {
            return res.status(401).json({error: "Please, verify all the fields"})
        }

    }
}

export default UserController;