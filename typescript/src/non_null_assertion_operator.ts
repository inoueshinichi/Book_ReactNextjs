// Non-null Assertion Operator
// --strictNullCkecksオプションをtrueにしている場合,
// TypeScriptは通常nullの可能性のあるオブジェクトへのアクセスはエラー扱いにする.
// 明示的にコンパイラに問題ないことをつたえる機能.

// nullになりえるsocialというプロパティの型を定義
interface User {
    name: string;
    social?: {
        facebook: boolean;
        twitter: boolean;
    }
}


// userがnullの場合, 実行時エラーになる可能性がある
// プロパティへのアクセスはコンパイルエラー!を用いて
// 明示的に指定することでコンパイルエラーを抑制する
function processUser(user?: User) {
    let s = user!.name
    console.log(`user.name: ${s}`)
}

let user = { name: "TinyTank" }
processUser(user)



