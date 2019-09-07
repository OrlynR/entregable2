const { Router } = require('express');
const router = Router();

const Movie = require('../models/Movie');

router.get('/', async (req,res) =>{
    try{
        const movies = await Movie.find().sort('-_id');
        res.json(movies);
    
    }catch(error){

        console.error("Error en get",error);
    } 

});

router.post('/add', async (req,res) =>{
    const movie = Movie(req.body);

    try{
        await movie.save()
        res.json(movie); 
    }catch(error){
        console.error("Error en add",error);
    }
});

router.post('/addmany', async (req,res) =>{
    const input = req.body;
    const movieArray = input.map(movie =>Movie(movie));

    try{
        await movieArray.map(movie =>movie.save());

        res.json(movieArray); 
    }catch(error){
        console.error("Error en addssss",error);
    }
});

router.put('/update/:id', async (req,res) =>{
    try{
        await Movie.findOneAndUpdate(
            {"_id" : req.params.id},//Es como lo encontramos
            req.body,
            {new:true}
        )
        res.send("movies");
    
    }catch(error){

        console.error("Error en put",error);
    } 

});

router.delete('/delete/:id', async (req,res) =>{
    try{
        await Movie.remove(
            {"_id" : req.params.id}//Es como lo encontramos
        )
        res.send("removemovie");
    
    }catch(error){

        console.error("Error en delete",error);
    } 

});

router.get('/getbycategory/:category', async (req,res) =>{
    try{
        const movies = await Movie.find({"category" : req.params.category});
        res.json(movies);
    
    }catch(error){

        console.error("Error en get",error);
    } 

});



module.exports = router;