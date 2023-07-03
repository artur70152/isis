import User from '../models/users';
import auth from '../../config/auth';

import jwt from "jsonwebtoken";
import * as yup from 'yup'
import authconfig from '../midlewares/auth';

class SessionController{
async store(req,res){
    const schema=yup.object().shape({
        
        email:yup.string().email().required(),
        password: yup.string().required()
        
        })
        if(!(await schema.isValid(req.body))){
            return res.status(400).json({error:'validation fails'})
         
        }
        
const {email,password}=req.body

const user=await User.findOne({where:{email}})
if(!user){
    return res.status(401).json({error:'User not found'})
}
if(!(await user.checkPassword(password))){
    return res.status(401).json({error:'password does not match'})
}
//console.log(user)
const {id, name,nascimento}=user;
return res.json({
    user:{
        id,name,email,
    },
nascimento:{nascimento},
   // token: jwt.sign({id},authconfig.secret,{
      //  expiresIn:authconfig.expiresIn,

        token: jwt.sign({id},auth.secret,{
            expiresIn:auth.expiresIn,

    })
 
})

}


}
export default new SessionController();