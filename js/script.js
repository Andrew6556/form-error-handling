"use strict";


document.querySelector(".form").addEventListener("submit", function(link){
    link.preventDefault();
    let [name, userName, age, point] = Array.from(this.querySelectorAll(".form__input")).map(item => item.value);
    
    let student = {
        "name":name,
        "userName":userName,
        "age":age,
        "point":point,
    };

    try{
        for (let key in student){
            if(!Boolean(student[key])) throw "Пустой ввод";
            else if(key == "point" && +student[key] > 300) throw "Ваш балл недопустим";
            else if(key == "age" && (+student[key] > 300 || +student[key] < 18 )) throw "Ваш возраст недопустим";
        }
        document.querySelector(".modal-data__name").innerText     = student.name;  
        document.querySelector(".modal-data__username").innerText = student.userName;
        document.querySelector(".modal-data__age").innerText      = student.age;
        document.querySelector(".modal-data__point").innerText    = student.point;

        document.querySelector(".modal-data").classList.remove("modal__hidden")
    }catch(err) {
        document.querySelector(".modal-error__type").innerText = err;
        document.querySelector(".modal-error").classList.remove("modal__hidden")
    }
})

document.querySelectorAll(".modal__btn").forEach(item =>{
    item.addEventListener("click", function(event){
        event.target.closest(".modal").classList.add("modal__hidden")
    })
})

