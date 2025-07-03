// 型ガード
// if文とtypeof演算子を使う

function addOne(value: number | string) {
    if (typeof value === 'string') {
        return Number(value) + 1
    }
    return value + 1
}

console.log(addOne(10)) // 11
console.log(addOne('20')) // 21


// 型ガードを用いると実行時エラーを引き起こしやすい
// asを使用する型アサーションも安全に型を利用したコードを書ける.

// オプショナルプロパティでinfoを定義する
type User = {
    info?: {
        name: string;
        age: number;
    }
}

let response = {}

// responseはJSON形式のAPIレスポンスが代入されている想定.
// Userに型アサーションをする.
const user = (response as any) as User

// オプショナルのプロパティへの型ガードを行う
if (user.info) {
    // もしオプショナルプロパティ配下のプロパティであるuser.info.nameにアクセスしても
    // エラーが起きない.
    // もしifの条件がない場合, "Object is possibly `undefined`."というエラーが発生する
    console.log(user.info.name)
} else {
    console.log('型ガードでuser.info.nameはnullなので出力されません')
}

