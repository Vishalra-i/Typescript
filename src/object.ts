interface User {
    firstName : string ;
    lastName : string ;
    age: number ;
    email?:string ;
}
function isLegal(user :User){

    if(user.age<18)
          console.log(`You are not Legal`)
    else
          console.log(`You are Legal`)
    
}

isLegal({
    firstName : "Vishal" ,
    lastName : "Rai" ,
    age : 18
})

isLegal({
    firstName : "Vishal" ,
    lastName : "Rai" ,
    age : 17 ,
    email : "nno@.cp"
})
