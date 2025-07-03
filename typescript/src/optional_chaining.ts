// Optional Chaining

// nullになりえるsocialというプロパティの型を定義
interface User {
    name: string;
    social?: {
        facebook: boolean;
        twitter: boolean;
    }
}

let user: User

user = { name: "TinyTank", social: { facebook: true, twitter: true} }
console.log(user.social?.facebook) // true

user = { name: "InoueShinichi" }
console.log(user.social?.facebook) // undefined