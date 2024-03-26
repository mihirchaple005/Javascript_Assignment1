
function Squarearr() {
    let arr = [] 
        i=0
    while(i<8) {
        arr[i] = Math.random() + 10
        i++
    }

    let newArr = arr.map(Math.sqrt)
    console.log(newArr)
}

Squarearr()