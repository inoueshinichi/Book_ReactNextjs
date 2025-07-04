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

// タイマーの周期
const UPDATE_CYCLE = 1000

// localStorageで使用するキー
const KEY_LOCALE = 'KEY_LOCALE'

enum Locale {
    US = 'en-US',
    JP = 'ja-JP',
}

const getLocaleFromString = (text: string): Locale => {
    switch (text) {
        case Locale.US:
            return Locale.US
        case Locale.JP:
            return Locale.JP
        default:
            return Locale.JP
    }
}

export const Clock = () => {
    const [timestamp, setTimestamp] = useState(new Date())
    const [locale, setLocale] = useState(Locale.US)

    // タイマーの設定と破棄
    useEffect(() => {
        const timer = setInterval(() => {
            setTimestamp(new Date())
        }, UPDATE_CYCLE)

        return () => {
            clearInterval(timer)
        }
    }, [])


    // localStorageから値を読み込む
    // useEffect(() => {
    //     localStorage.setItem(KEY_LOCALE, locale)
    // }, [locale])
    useLayoutEffect(() => {
        const savedLocale = localStorage.getItem(KEY_LOCALE)
        setLocale(getLocaleFromString(savedLocale!))
    }, [])

    return (
        <div>
            <p>
                <span id="current-time-label">現在時刻: </span>
                <span>{timestamp.toLocaleString(locale)} </span>
                <select value={locale} onChange={(e) => setLocale(getLocaleFromString(e.target.value))}>
                    <option value="en-US">en-US</option>
                    <option value="ja-JP">ja-JP</option>
                </select>
            </p>
        </div>
    )
}


