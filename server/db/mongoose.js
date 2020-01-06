const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://desbizz:MTyt6290@cluster0-vqdwu.gcp.mongodb.net/alphahr-api?retryWrites=true", {
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true
})
mongoose.set('useFindAndModify', false);
