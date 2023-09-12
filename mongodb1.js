const mg=require('mongoose')
mg.connect('mongodb://127.0.0.1:27017/test').
then(cd=>{console.log('success')}).
catch((err)=>{console.error(err)})

const myschema=new mg.Schema({
    name:{
        type:'string',
        required:true,
    },
    surname:String,
    age:Number,
    active:Boolean,
    date:{
        type:Date,
        default:new Date(),
    }
}) ;

const person = new mg.model("person",myschema);

// const createDOC = async()=>{
//     const personData1 = new person(
//         {
//             name:"def",
//             surname:"ghi",
//             age:31,
//             active:true
//         }
//     )
//     const personData2 = new person(
//         {
//             name:"abc",
//             surname:"kaf",
//             age:31,
//             active:true
//         }
//     )
//     const personData3 = new person(
//         {
//             name:"fja",
//             surname:"gaf",
//             age:31,
//             active:true
//         }
//     )
//     const personData4 = new person(
//         {
//             name:"xyz",
//             surname:"pqr",
//             age:31,
//             active:true
//         }
//     )
//     // const result = await(personData1.save())   //when only one data.... 
//     //const result = await(person.insertMany([personData1,personData2,personData3,personData4]))
//     //console.log(result)
//     

// }


//retrieve all the data having all the name test
// const createDOC = async()=>{
//     const query1={name:"def"}
//     const result = await(person.find(query1))
//     console.log(result)
    
    

// }
//name of person having age greater than 28
// const createDOC = async()=>{
//     const query1={age:{$gt:28}}
//     const result = await(person.find(query1))
//     console.log(result)
// }
//



//age between 25-28 give only names
// const createDOC = async()=>{
//     const query1={$and:[{age:{$gt:25}},{age:{$lt:28}}]}
//     const result = await(person.find(query1,{name:1,_id:0})).select({name:1,_id:0})
//     console.log(result)
// }


//display the surnames of all the names having name ---
// const createDOC = async()=>{
//     const query1={name:"def"}
//     const result = await(person.find(query1)).select({surname:1,_id:0})
//     console.log(result)
// }

//delete all the records having surname ghi
// const createDOC = async()=>{
//     const query1={}
//     const result = await(person.deleteOne({surname:'ghi'}))
//     console.log(result)

// }

//sort the data having age less than 28 ascending..
// const createDOC = async()=>{
//     const query1={age:{$lt:28}}
//     const result = await(person.find(query1).sort({age:-1}))
//     console.log(result)

// }

//count the number of data in previous one
const createDOC = async()=>{
    const query1={age:{$lt:28}}
    const result = await(person.find(query1).sort({age:-1}).count())
    console.log(result)

}
createDOC()