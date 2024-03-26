
function StringLength() {
    let arr1 = [1,2,3,4,5,7,8,9]
    let arr2 = [1,2,3,9,8,7,6,5]
    const arr = new Set()
    i =0 ;
    
    while (i<arr1.length) {
        j = 0;
        while (j<arr2.length) {
            if (arr1[i] == arr2[j]){
                arr.add(arr1[i])
            }
            j++
        }
        i++
    }
    console.log(arr)
    
}

StringLength()