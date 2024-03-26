let a = 1
let str1 = ""
let str2 = ""
let val = 3; 
while (a<=10) {
    str1 = "3*"+a
    let m =a
    while (m != 1) {
        str2 = str2 + "+ 3 " 
        m--
    }
    val = 3*a
    console.log(str1 + " = "+str2+" = "+ val)
    a++
}