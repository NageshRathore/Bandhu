const express=require('express');
const bcrypt=require('bcryptjs');
const User=require('../models/user');
const router=express.Router();
const {body,validationResult}=require('express-validator');
var jwt=require('jsonwebtoken');
const JWT_SECRET = 'Nageshisnow@nenginer';
var fetchuser=require('../middleware/fetchuser');

//posting data to /api/auth/createuser---sending data post method
router.post('/createuser',[
    body('email','Enter a valid name.').isEmail(),
    body('name','Enter a valid email.').isLength({min:3}),
    body('password','Password must be atleast 5 chars').isLength({min:5})
], async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }


    try{
    let user = await User.findOne({email:req.body.email});
    if(user){
        return res.status(400).json({error:"user wth same email exists"})
    }
    const salt= await bcrypt.genSalt(10);
    const secPass= await bcrypt.hash(req.body.password,salt);
    user= await User.create({
        name:req.body.name,
        password:secPass,
        email:req.body.email
    })
    const data={
        user:{
            id:user.id
        }
    }
    const authtoken=jwt.sign(data,JWT_SECRET);
    // console.log(jwtData);
    res.json({authtoken});

   }catch(error){
    console.error(error.message);
    res.status(500).send("Internal server error");

   }
})


//Authenticating user login..POST  "/api/auth/login"...no login reqd..
router.post('/login',[
    body('email','Enter a valid name.').isEmail(),
    body('password','cannot be blanked').exists()

], async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const {email,password}=req.body;
    try {
        let user= await User.findOne({email});
        if(!user){
            return res.status(400).json({error:"Incoorect credentials"});
        }
        const passwordCompare= await bcrypt.compare(password, user.password);
        if(!passwordCompare){
            return res.status(400).json({error:"Incoorect credentials"});
        }
        const data={
            user:{
                id:user.id
            }
        }
        const authtoken=jwt.sign(data, JWT_SECRET);
        res.json({authtoken});
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");

    }

})


// route 3 : getting details of logged in user..../api/auth/getuser.......login reqd
router.post('/getuser',fetchuser, async(req,res)=>{
try {
    userId=req.user.id
    const user=await User.findById(userId).select("-password");
    res.send(user);
    
} catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
    
}
})

module.exports=router