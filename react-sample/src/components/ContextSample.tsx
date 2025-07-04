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

const TitleContext = React.createContext('')

const Title = () => {
    return (
        <TitleContext.Consumer>
            {(title) => {
                return <h1>{title}</h1>
            }}
        </TitleContext.Consumer>
    )
}

const Header = () => {
    return (
        <div>
            <Title />
        </div>
    )
}

const Page = () => {
    const title = "TypeScriptとReact/Nextjsで作る実践Webアプリケーション開発"

    return (
        <TitleContext.Provider value={title}>
            <Header />
        </TitleContext.Provider>
    )
}


export default Page

