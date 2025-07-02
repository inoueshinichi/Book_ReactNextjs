// ジェネリック

class Queue<T> {
    private array: T[] = []

    push(item: T) {
        this.array.push(item)
    }

    pop(): T | undefined {
        return this.array.shift()
    }
}

const queue = new Queue<number>()
queue.push(5)
queue.push(4)
queue.push(3)
console.log("queue", queue)
queue.pop()
console.log("queue", queue)
