// let text=prompt("Nhập chuỗi số nguyên cần kiểm tra ngăn cách nhau bằng dấu cách");
// let arr = text.split(" ");
// let checkArr=[];

let text=prompt("Nhập chuỗi số nguyên cần kiểm tra ngăn cách nhau bằng dấu cách");
let arr = text.split(" ");
let  max
        let result = Array.from(new Set(arr))
        console.log(result);
        let count = 0
        console.log(result.length)
        for(let i=0;i<result.length;i++){
            for(let j=0;j<arr.length;j++){
                if(result[i] == arr[j]){
                    count += 1;
                }
            }
            if(count>1){
                result.splice(i,1)
                i--;
            }
            count = 0
        } 
        console.log(result)
        for (let i = 0; i < result.length; i++) {
            max=result[0];
            if (max<result[i]) {
                max=result[i];
            }
            
        }
      alert(`Kết quả cần tìm là ${max}`)