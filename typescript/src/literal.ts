// リテラル型

let postStatus: 'draft' | 'published' | 'deleted'
postStatus = 'draft' // OK
// postStatus = 'drafts' // NG

// -1, 0, 1, いずれしか許さない
function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : (a > b) ? 1 : -1
}

