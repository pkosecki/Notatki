const mongoose = require('mongoose');

//łączę się z bazą danych
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://"+ "student" +":"+ "student" +"@cluster0.glulnjl.mongodb.net/"+ "notatka" +"?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});