let Stack = (function () {
  const items = new WeakMap()
  class Stack {
    constructor() {
      items.set(this, [])
    }
    push() {
      const a = items.get(this)
      a.push(...arguments)
    }
    pop() {    
      const a = items.get(this)
      return a.pop()
    }
    peek() {
      const a = items.get(this)
      return a[a.length - 1]
    }
    isEmpty() {
      const a = items.get(this)
      return a.length === 0
    }
    clear() {
      let a = items.get(this)
      a = []
    }
    size() {
      const a = items.get(this)
      return a.length
    }
    print() {
      const a = items.get(this)
      console.log(a.toString());
    }
  }
  return Stack
})()

function decimal2Binary(decimal) {
  let remainder,
  remainderStack = new Stack,
  binary = ''
  while (decimal !== 0) {
    remainder = decimal % 2
    remainderStack.push(remainder)
    decimal = Math.floor(decimal / 2)
  }
  while (! remainderStack.isEmpty()) {
    binary += remainderStack.pop()
  }
  return binary
}

console.log(decimal2Binary(10));