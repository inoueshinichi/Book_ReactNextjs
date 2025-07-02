"use strict";
// ジェネリック
Object.defineProperty(exports, "__esModule", { value: true });
class Queue {
    constructor() {
        this.array = [];
    }
    push(item) {
        this.array.push(item);
    }
    pop() {
        return this.array.shift();
    }
}
const queue = new Queue();
queue.push(5);
queue.push(4);
queue.push(3);
console.log("queue", queue);
queue.pop();
console.log("queue", queue);
