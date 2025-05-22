const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://anusruthianusruthi:Pfa94Yww5pzjM9L9@cluster0.vtscaem.mongodb.net/userDB?retryWrites=true&w=majority&appName=Cluster0').then((res)=>{
    console.log('DB connected')
}).catch((res)=>{
    console.log("DB not connected");
});