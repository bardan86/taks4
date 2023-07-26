// const  validator = require("validator")
// const request = require("request")
// const fs = require("fs")
// const weather = require("./weather")
// const geocode = require("./geo")
// const yargs = require("yargs")
const express = require("express")
const path = require("path")
const app = express()
const PORT = 5000
// console.log(__dirname)
// console.log(path.join (__dirname , "/public"))
// const stpage = path.join (__dirname , "/public") // to let express read static pages
// hbs.localsAsTemplateData(app);

// app.use(express.json())
// const middle =express.urlencoded({
//     extended:false,
//     limit:1000
// })




// app.use(express.static(stpage))

// app.get("/" , (req,res)=>{
//     res.send("path")
// })


////////////////////////
//hbs



// const viewsDir = path.join(__dirname , "../views")
// app.set("views" , viewsDir)

// const PublicDirec = path.join(__dirname , "../public")
// app.set("views" ,PublicDirec)

const hbs = require('hbs');
const aprtialsPath = path.join(__dirname , "../partials")

hbs.registerPartials(aprtialsPath)
app.set('view engine', 'hbs')
//////////

app.get("/" , (req , res)=>{
    res.render( "index" ,{
        title :"country weather",
        desc :"please prerss on country info :",
    })
})

app.get("/CountryInfo" , (req , res)=>{
    res.render( "countryinfo" ,{
        title :"Country Info",
        desc :"enter country :",
        btn : "send",
        input : "cName"
    })
})

app.get("/contact" , (req , res)=>{
    res.render( "contact" ,{
        title :"Contact",
        name:"Mahmoud",
        nationality :"syrian:",
        age : "35",
    
    })
})

// app.post("/upload" ,middle, (req,res)=>{

//     try {
//         console.log(req.body)
//     } catch (error) {
//         console.log("not show")
//     }
   
   
// })
app.listen (PORT , ()=>{
    console.log(`this web work on port ${PORT}`)
})

//  const showdet = (country) => {
//     geocode(country, (error,data)=>{
//     //     console.log("error:", error)
//     // console.log("data:", data)
    
    
//     weather(data.latitude , data.longtitude 
//         , (error,data) =>{
//     console.log("error:", error)
//     console.log("data:", data)
    
//     })
//     })
// }

// showdet("syria")

// command   node app  country --cName="germany"
// yargs.command({
//     command:"country",
//     describe:"enter country",
//     builder:{
//         cName:{
//             describe:"counrty name",
//             demandOption : true,
//             type:"string"
//         },
//     },
//     handler:(x)=>{
//         showdet(x.cName)
        
//     }
// })
// yargs.parse()


