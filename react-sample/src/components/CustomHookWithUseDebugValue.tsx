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

// input向けにコールバックと現在の入力内容をまとめたフック
const useInput = () => {
    const [state, setState] = useState('')
    // inputが変化したらフック内の状態を更新
    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setState(e.target.value)
    }, [])

    // デバッグ用に値を出力する(useDebugValue)
    useDebugValue(`Input: ${state}`)

    // 現在の入力内容とコールバック関数を外部公開 = カスタムフック
    return [state, onChange] as const
}

const CustomInputHook = () => {
    const [text, onChangeText] = useInput()
    
    return (
        <div>
            <input type="text" value={text} onChange={onChangeText} />
            <p>Input: {text}</p>
        </div>
    )
}

export default CustomInputHook