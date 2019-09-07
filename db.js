const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://dbentregable:dbentregable@cluster0-i550w.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
})
.then(db => console.log(`DB is connected`))
.catch(err => console.error(err));

