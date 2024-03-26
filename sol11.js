
function StringLength() {
    let arr = ["erty","eryuty","erty","sderty","ertoiy","erbnty","ermnbvcxty","eruioty","erpoty","rtyui"]
    let i=0
    let index = 0
    max = 0
    while (i<10) {
        let x = arr[i]
        if (max < x.length) {
            max = x.length
            index = i
        }
        i++
    }
    console.log(arr[index])
}

StringLength()