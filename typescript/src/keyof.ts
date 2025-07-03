// keyofオペレーター
// 型に対してkeyofを用いると、その型が持つ各プロパティの型の
// Union型を返せる。 keyofの戻り値はリテラル型のUnion型として扱われる.
// 使いどころ：オブジェクトに存在するキーを使用して何か関数の処理を行いたい場合などの安全性を高める.

interface User {
    name: string;
    age: number;
    email: string;
}

type UserKey = keyof User // `name` | `age` | `email` というUnion型になる

const key1: UserKey = 'name' // 代入可能
// const key2: UserKey = 'phone' // 代入不可


// 第一引数に渡したオブジェクトの型のプロパティ名のUnion型と
// 第二引数で渡す値の型が一致しない場合、エラーとなる
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key]
}
// T[K]によりキーに対応する型が戻り値の型になる.

const user: User = {
    name: 'TinyTank',
    age: 35,
    email: "tiny.tank.business@gmail.com"
}

// nameは型のキーに存在するために正しくstring型を返す
const userName = getProperty(user, 'name')
console.log('userName', userName)

// genderはオブジェクトのキーに存在しないため、コンパイル時エラーとなる
// const userGender = getProperty(user, 'gender')