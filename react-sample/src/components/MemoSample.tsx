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

type FizzProps = {
    isFizz: boolean;
}

const Fizz = (props: FizzProps) => {
    const { isFizz } = props
    console.log(`Fizzが再描画されました, isFizz=${isFizz}`)
    return <span>{isFizz ? 'Fizz' : ''}</span>
}

type BuzzProps = {
    isBuzz: boolean;
    onClick: () => void;
}

const Buzz = memo<BuzzProps>((props) => {
    const { isBuzz, onClick } = props

    console.log(`Buzzが再描画されました, isBuzz=${isBuzz}`)
    return (
        <span onClick={onClick}>
            {isBuzz ? 'Buzz' : ''}
        </span>
    )
})


export const Memo = () => {
    const [count, setCount] = useState(1)
    const isFizz = count % 3 === 0
    const isBuzz = count % 5 === 0

    const onBuzzClick = () => {
        console.log(`Buzzがクリックされました isBuzz=${isBuzz}`)
    }

    console.log(`Memoが再描画されました, count=${count}`)
    return (
        <div>
            <button onClick={() => setCount((c) => c+1)}>+1</button>
            <p>{`現在のカウント: ${count}`}</p>
            <p>
                <Fizz isFizz={isFizz} />
                {/* せっかくメモ化したBuzzも再描画のたびに生成されるonBuzzClickオブジェクトをpropsで渡すことで
                Buzzは毎回再描画されてしまう. */}
                <Buzz isBuzz={isBuzz} onClick={onBuzzClick} />
            </p>
        </div>
    )
}


type ButtonProps = {
    onClick: () => void;
}

// DecrementButtonは通常の関数コンポーネントでボタンを表示する
const DecrementButton = (props: ButtonProps) => {
    const { onClick } = props
    console.log('DecrementButtonが再描画されました')
    return <button onClick={onClick}>Decrement</button>
}

// IncrementButtonはメモ化した関数コンポーネントでボタンを表示する
const IncrementButton = memo<ButtonProps>((props) => {
    const { onClick } = props
    console.log('IncrementButtonが再描画されました')
    return <button onClick={onClick}>Increment</button>
})

// DoubleButtonはメモ化した関数コンポーネントでボタンを表示する
const DoubleButton = memo((props: ButtonProps) => {
    const { onClick } = props
    console.log('DoubleButtonが再描画されました')
    return <button onClick={onClick}>Double</button>
})

export const Parent = () => {
    const [count, setCount] = useState(0)

    const onDecrement = () => {
        setCount((c) => c - 1)
    }

    const onIncrement = () => {
        setCount((c) => c + 1)
    }

    // useCallbackで関数オブジェクトをメモ化して
    // メモ化した関数コンポーネントの再描画を防ぐ
    const onDouble = useCallback(() => {
        setCount((c) => c * 2)
    }, [])

    return (
        <div>
            <p>Count: {count}</p>
            {/* 毎回再描画 */}
            <DecrementButton onClick={onDecrement} />
            {/* コンポーネントはメモ化したけど, onIncrementがメモ化されていないので、毎回再描画 */}
            <IncrementButton onClick={onIncrement} />
            {/* メモ化成功 */}
            <DoubleButton onClick={onDouble} />
        </div>
    )
}


export const UseMemoSample = () => {
    const [text, setText] = useState('')
    const [items, setItems] = useState<string[]>([])

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    const onClickButton = () => {
        setItems((prevItems) => {return [...prevItems, text]})
        setText('')
    }

    // numberOfCharacters1は再描画の度にitems.reduceを実行して結果を得る
    const numberOfCharacters1 = items.reduce((sub, item) => sub + item.length, 0)
    // numberOfCharacter2はuseMemoを使い、itemsが更新されるタイミングでitems.reduceを実行して結果を得る
    const numberOfCharacters2 = useMemo(() => {
        return items.reduce((sub, item) => sub + item.length, 0)
    }, [items])

    return (
        <div>
            <p>UseMemoSample</p>
            <div>
                <input value={text} onChange={onChangeInput} />
                <button onClick={onClickButton}>Add</button>
            </div>
            <div>
                {items.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
            <div>
                <p>Total Number of Characters 1: {numberOfCharacters1}</p>
                <p>Total Number of Characters 2: {numberOfCharacters2}</p>
            </div>
        </div>
    )
}