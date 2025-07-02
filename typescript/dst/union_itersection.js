"use strict";
// Union型とIntersection型
Object.defineProperty(exports, "__esModule", { value: true });
// 和集合
function printId(id) {
    console.log(id);
}
printId('888');
printId(777);
// OK
const id = {
    id: "111",
    name: "TinyTank"
};
// OK
const contact = {
    name: "TinyTank",
    email: "tiny.tank.business@gmail.com",
    phone: "0987654321"
};
// OK
const employee = {
    id: "222",
    name: "tinytank",
    email: "tiny.tank.business@gmail.com",
    phone: '0123456789'
};
// NG
// const employeeContact: IdentityAndContanct = {
//     // idが足りない
//     name: "TinyTank",
//     email: "tiny.tank.business@gmail.com",
//     phone: '0123456789'
// }
