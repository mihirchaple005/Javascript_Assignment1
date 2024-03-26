// Math.js
export default function add(a,b) {
    return a+b
}

export default function sub(a,b) {
    if (a>b) {
        return a-b
    }else {
        return b-a
    }
}

export default function mul(a,b) {
    return a*b
}

export default function div(a,b){
    return a/b
}

// main.js

import {add,sub,mul,div} from "./math.js"
alert(add(2,3))
alert(sub(5,4))
alert(mul(6,7))
alert(div(10,5))
