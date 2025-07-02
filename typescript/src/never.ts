// never型
// 決して発生しない型. 
// 
// 使いどころは例外を必ず誘発する関数の戻り値や、Siwtch文のdefaultの戻り値による型漏れチェックなど

function error(message: string): never {
    throw new Error(message)
}

function foo(x: string | number | number[]): boolean {
    if (typeof x === 'string') {
        return true
    } else if (typeof x === 'number') {
        return false
    }

    return error('Never happens')
}


// 将来的に定数が追加されるenum型
enum PageType {
    ViewProfile,
    EditProfile,
    ChangePassword,
}


const getTitleText = (type: PageType) => {
    switch (type) {
        case PageType.ViewProfile:
            return 'Setting'
        case PageType.EditProfile:
            return 'Edit Profile'
        case PageType.ChangePassword:
            return 'Change Password'
        default:
            // 決して発生しないと想定したことをコンパイラに伝える
            // 型漏れバグを防ぐ
            const wrongType: never = type
            throw new Error(`${wrongType} is not in PageType`)
    }
}


