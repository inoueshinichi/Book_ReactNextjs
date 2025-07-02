// Union型とIntersection型

// 和集合
function printId(id: number | string) {
    console.log(id)
}

printId('888')
printId(777)

// 型エイリアス同士を掛け合わせて新たな型を創造する
type Identity = {
    id: number | string;
    name: string;
}

type Contact = {
    name: string;
    email: string;
    phone: string;
}

// Union型
type IdentityOrContact = Identity | Contact

// OK
const id: IdentityOrContact = {
    id: "111",
    name: "TinyTank"
}

// OK
const contact: IdentityOrContact = {
    name: "TinyTank",
    email: "tiny.tank.business@gmail.com",
    phone: "0987654321"
}


// Intersection型
type IdentityAndContanct = Identity & Contact

// OK
const employee: IdentityAndContanct = {
    id: "222",
    name: "tinytank",
    email: "tiny.tank.business@gmail.com",
    phone: '0123456789'
}

// NG
// const employeeContact: IdentityAndContanct = {
//     // idが足りない
//     name: "TinyTank",
//     email: "tiny.tank.business@gmail.com",
//     phone: '0123456789'
// }