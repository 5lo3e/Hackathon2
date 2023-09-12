let listInforCard = [];
let inputCardNumber = document.getElementById("inputCardNumber");
let inputDate = document.getElementById("inputDate");
let inputCVV = document.getElementById("inputCVV");
let dataCard = document.getElementById("dataCard");
let addBtn = document.getElementById("addBtn");
let count
let countImg
let arrImg = document.getElementsByTagName("img");
let inputCardNumberStar
let inputCVVStar

let render = () => {
    dataCard.innerHTML = ""
    listInforCard.forEach((item, index) => {
        dataCard.innerHTML += `
        <tr>
         <td><img src="${item.img}" alt=""></td>
         <td>${item.number}</td>
         <td>${item.date}</td>
         <td>${item.cvv}</td>
            <td>    
                <button onclick="view(${index})" id="viewBtn">View</button>
                <button onclick="edit(${index})" id="editBtn">Edit</button>
                <button onclick="del(${index})" id="delBtn">Delete</button>
            </td>
        </tr>
        `
    });
}
let add = () => {
    if (addBtn.innerHTML == "Edit") {

        listInforCard[count].img = arrImg[countImg].src;
        listInforCard[count].number = inputCardNumber.value;
        listInforCard[count].date = inputDate.value;
        listInforCard[count].cvv = inputCVV.value;

        render();
    } else {
        if ((inputCardNumber.value > 1000000000000000)
            && (inputCardNumber.value < 10000000000000000)
            &&(inputCVV.value.length==3)) {
           
            inforCard = {
                img: arrImg[countImg].src,
                number: inputCardNumber.value,
                date: inputDate.value,
                cvv: inputCVV.value
            }


            listInforCard.push(inforCard)
            inputCardNumber.value = "";
            inputDate.value = "";
            inputCVV.value = "";
            arrImg[countImg].setAttribute("style", "border:none ;")
            render()

        }
        else {
            alert("Hãy nhập đủ đúng dữ liệu và chọn thẻ")
        }

    }
};
let edit = (index) => {
    addBtn.innerHTML = "Edit"
    arrImg[countImg].setAttribute("style", "border: 2px solid red;");

    inputCardNumber.value = listInforCard[index].number;
    inputDate.value = listInforCard[index].date;
    inputCVV.value = listInforCard[index].cvv;
    count = index;
};

let del = (index) => {
    listInforCard.splice(index, 1);
    render();
};
let view = () => {

};

let clickImg = (id) => {
    arrImg[id].setAttribute("style", "border: 2px solid red;");
    for (let j = 0; j < arrImg.length; j++) {
        if (id != j) {
            arrImg[j].setAttribute("style", "border:none ;")
        }
    }
    countImg = id;
}
let cvvStar=()=>{
    
}