// Readonly
// オブジェクトやクラスのプロパティに対して適用する

type User1 = {
    readonly name: string;
    readonly gender: string; 
}

let user1: User1 = { name: "TinyTank", gender: "male" }
// user1.gender = 'Female' // 読み取り専用なので代入できずに静的解析によりエラー

type User2 = {
    name: string;
    gender: string;
}

type UserReadOnly = Readonly<User2>

let user2: UserReadOnly = { name: 'Inoue', gender: "Female" }
// user2.gender = 'Male' // 代入できない

