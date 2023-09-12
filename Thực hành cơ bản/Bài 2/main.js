alert("Nhập chuỗi chữ số ngăn cách bằng dấu cách");
let a=prompt("Mời nhập");
console.log(a);
let arr =a.split(" ");
console.log(arr);
for (let i = 0; i < arr.length; i++) {
    for (let f = 2; f <= Math.sqrt(arr[i]); f++) {
    if (arr[i] % f == 0) {
        console.log(i);
        arr.splice(i,1)
    }
}
}
console.log(arr);
let result=arr.reduce((a,b)=>{
    return (a/1)+(b/1)
},0);
alert(result);

