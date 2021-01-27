const express = require('express');
const router = express.Router();


const Usermodel = require('../models/User');

router.get('/home',(req,res)=>{
    // res.send('This is get respond');
    res.json({
        body: {
            message: 'Home api'
        }
    });
})


// router.post('/add',(req,res)=>{
//     // res.send('This is get respond');
//     res.json(req.body.email);
// })


router.post('/add',async (req,res)=>{

   // console.log(req.body.name);
    const user = new Usermodel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    //one way of defiing func -method 1
//   user.save(function(err,resp){
//       if(err) return res.send(err);

//       res.send(resp);
//   });
    

    //2nd-method
    // user.save()
    // .then(resp=>{
    //     res.send(resp);
    // }).catch(err=>{
    //     res.send(err);
    // });


        const save = await user.save()
        try{
          res.send(save);
        }catch(err){
            res.send(err);
        }
        
        });

//get all data
        router.get('/all', async (req,res)=>{
            const users = await Usermodel.find()

            try{
                res.send(users)
            }catch(err){
                res.send(err)
            }

        });

//get data by ID
        router.get('/user/:id', async (req,res)=>{
            res.send(req.params.id)
            
        });

module.exports = router;
