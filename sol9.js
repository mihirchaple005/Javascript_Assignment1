
function findword(word) {
    let arr = [ "Nagpur","Bhopal","Delhi","Udaipur","Delhi"]
    let a = 0;
    while (a < arr.length) {
        if (word == arr[a]) {
            console.log(a)
        }
        a++
    }
}

findword("Delhi")