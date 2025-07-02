"use strict";
// 実践で重要な型
Object.defineProperty(exports, "__esModule", { value: true });
// Enum型 (TS拡張)
// No Enum
const DirectionNoEnum = {
    'Up': 0,
    'Down': 1,
    'Left': 2,
    'Right': 3,
};
// Yes Enum
var DirectionYesEnum;
(function (DirectionYesEnum) {
    DirectionYesEnum[DirectionYesEnum["Up"] = 0] = "Up";
    DirectionYesEnum[DirectionYesEnum["Down"] = 1] = "Down";
    DirectionYesEnum[DirectionYesEnum["Left"] = 2] = "Left";
    DirectionYesEnum[DirectionYesEnum["Right"] = 3] = "Right";
})(DirectionYesEnum || (DirectionYesEnum = {}));
console.log("DirectionYesEnum:", DirectionYesEnum);
console.log("DirectionNoEnum:", DirectionNoEnum);
let direction = DirectionYesEnum.Left;
console.log("direction", direction);
// 文字列型のEnum
var StringDirection;
(function (StringDirection) {
    StringDirection["Up"] = "Up";
    StringDirection["Down"] = "Down";
    StringDirection["Left"] = "Left";
    StringDirection["Right"] = "Right";
})(StringDirection || (StringDirection = {}));
// String -> StringDirection
const value = "Down";
const enumValue = value;
if (enumValue === StringDirection.Down) {
    console.log("Down is selected!");
}
