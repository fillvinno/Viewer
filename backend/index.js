require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
// подключение к бд
const Sequelize = require("sequelize");

const sequelize = new Sequelize("viewer", "postgres", "root", {
  dialect: "postgres",
  host: "localhost",
  define: {
    timestamps: false
  }
});

sequelize.sync().then(()=>{
    app.listen(PORT, function(){
      console.log('server started on port ' + PORT);
    });
  }).catch(err=>console.log(err));

const PORT = process.env.PORT || 5000

const app = express()

app.use(cors({
        credentials: true,
        origin: 'http://localhost:3000'
    }))
app.use(cookieParser())

// const start = async () => {
//     try {
//         app.listen(PORT, () => console.log('server started on port ' + PORT))
//     } catch (e) {
//         console.log(e);
//     }
// }

// start()