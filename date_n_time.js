let myDate = new Date();
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)

// let myCreatedDate = new Date(2026, 0, 22)
// let myCreatedDate = new Date("2026-01-22")
// let myCreatedDate = new Date(2026, 0, 22, 5, 3)

let myCreatedDate = new Date("01-22-2026")
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getMonth() + 1)
// console.log(Math.floor(Date.now() / 1000)) // timestamp in seconds

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1 )
console.log(newDate.getDay())

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', { weekday: 'long' })
