// インデックス型
// オブジェクトのプロパティが可変の時、まとめて型定義できる

// プロパティ名を任意のnmberとして扱う型定義
type SupportVersions = {
    [env: number]: boolean;
}

// stringのプロパティに定義した場合エラーが起きる
let versions: SupportVersions = {
    102: false,
    103: false,
    104: true,
    '105': false, // OK
    // 'v106': true, 
}

