"use strict";
// Optional Chaining
Object.defineProperty(exports, "__esModule", { value: true });
let user;
user = { name: "TinyTank", social: { facebook: true, twitter: true } };
console.log(user.social?.facebook); // true
user = { name: "InoueShinichi" };
console.log(user.social?.facebook); // undefined
