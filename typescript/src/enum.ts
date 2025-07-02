// 実践で重要な型

// Enum型 (TS拡張)

// No Enum
const DirectionNoEnum = {
    'Up': 0,
    'Down': 1,
    'Left': 2,
    'Right': 3, 
}

// Yes Enum
enum DirectionYesEnum {
    Up,
    Down,
    Left,
    Right,
}

console.log("DirectionYesEnum:", DirectionYesEnum)
console.log("DirectionNoEnum:", DirectionNoEnum)


let direction: DirectionYesEnum = DirectionYesEnum.Left
console.log("direction", direction)


// 文字列型のEnum
enum StringDirection {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
}


// String -> StringDirection
const value: string = "Down"
const enumValue: StringDirection = value as StringDirection
if (enumValue === StringDirection.Down) {
    console.log("Down is selected!")
}

