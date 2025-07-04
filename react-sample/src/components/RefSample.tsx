import React, {
    useState,
    useContext,
    useReducer,
    useEffect,
    useLayoutEffect,
    useRef,
    forwardRef,
    useImperativeHandle,
    useTransition,
    useMemo,
    useCallback,
    memo,
    useId,
    useDeferredValue,
    useDebugValue,
    useSyncExternalStore,
    useActionState,
    useInsertionEffect,
    useOptimistic
} from "react"


// Sleep関数
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const UPLOAD_DELAY = 5000 // 5秒を想定

export const ImageUploader = () => {
    const inputImageRef = useRef<HTMLInputElement | null>(null)
    const fileRef = useRef<File | null>(null)
    const [message, setMessage] = useState<string | null>('')

    // 「画像をアップロード」というテキストがクリックされたときのCB
    const onClickText = () => {
        if (inputImageRef.current !== null) {
            // inputのDOMにアクセスしてクリックイベントを発火
            inputImageRef.current.click()
        }
    }

    // ファイルが選択された後に呼ばれるCB
    const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if (files !== null && files.length > 0) {
            // fileRef.currentに値を保存
            // fileRef.currentが変化しても再描画は発生しない
            fileRef.current = files[0]
        }
    }

    // アップロードボタンがクリックされたときのCB
    const onClickUpload = async () => {
        if (fileRef.current !== null) {
            await sleep(UPLOAD_DELAY) // ここでは疑似的に一定時間待つ
            setMessage(`${fileRef.current.name} has been successfully uploaded.`)
        }
    }

    return (
        <div>
            <p style={{ textDecoration: 'underline' }} onClick={onClickText}>
                画像をアップロード
            </p>
            <input ref={inputImageRef} type="file" accept="image/*"
                onChange={onChangeImage}
                style={{ visibility: 'hidden' }}
            />
            <br />
            <button onClick={onClickUpload}>アップロードする</button>
            {message !== null && <p>{message}</p>}
        </div>
    )
}


const ImperativeChild = React.forwardRef((props, ref) => {
    const [message, setMessage] = useState<string | null>(null)

    // useImperativeHandleで親のrefから参照できる値を設定
    useImperativeHandle(ref, () => ({
        showMessage: () => {
            const date = new Date()
            const message = `Hello, it's ${date.toLocaleString()} now`
            setMessage(message)
        }
    }))

    return <div>{message !== null ? <p>{message}</p> : null}</div>
})


export const ImperativeParent = () => {
    const childRef = useRef<{ showMessage: () => void }>(null)
    const onClick = () => {
        if (childRef.current !== null) {
            // 子のuseImperativeHandleで指定した値を参照
            childRef.current.showMessage()
        }
    }

    return (
        <div>
            <button onClick={onClick}>Please Show Message by yourself.</button>
            <ImperativeChild ref={childRef} />
        </div>
    )
}