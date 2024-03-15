const First : string = "Hello World "
console.log(First) //Hello world

function greet(firstName:string){
    return "Hello " + firstName
}

console.log(greet("Vishal Rai"))

function legalAgeCheck(age:number){
    return age >= 18 ? true : false;
}

console.log(legalAgeCheck(20)) //True
console.log(legalAgeCheck(16)) //false

function runAfter21S(fn : ()=> void) {
    setTimeout(fn ,1000)
}

runAfter21S(() => console.log("Hello"))//Hello



