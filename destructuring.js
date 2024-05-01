// let arr = [10,20,30,40]

// let a = arr[0]
// let b = arr[1]
// let c = arr[2]
// let d = arr[3]

// let [a,,,d] = arr


// console.log(a,d)


// let obj = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// }

// let x = obj.name
// let y = obj.age
// let z = obj.city

// let {name:x,age:y,city:z} = obj

// console.log(x,y,z)

// let name = obj.name
// let age = obj.age
// let city = obj.city

// let {name:name,age:age,city:city} = obj
// let {name, age, city} = obj

// console.log(name,age,city)



// function hello(){

//     return ["Abhishek", 28, "Delhi"]
// }

// // let x = hello() // x = ["Abhishek", 28, "Delhi"]

// let [name, age, city] = hello()

// console.log(name, age, city)


function hello1({name, age, city}){ // {name, age, city} = obj
    // obj = {name: 'John', age: 30, city: 'New York'}
    // let {name, age, city} = obj
    console.log(obj)
}


hello1({name: 'John', age: 30, city: 'New York'})