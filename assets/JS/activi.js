document.addEventListener("DOMContentLoaded",function(){
  const modal = document.querySelector('.modal');
  const btn = document.querySelector('.in');
  const overlay = document.querySelector('.modal__overlay');
  btn.onclick = function(){
      modal.classList.add('modal__active');
  }
  overlay.onclick = function(){
      modal.classList.remove('modal__active');
  }
  const input = document.querySelectorAll('.auth-form__input');
  function remove_oninput(element){
      var message = element.querySelector('.form-message');
      message.innerText = '';
      element.classList.remove('invalid');
  }
  function add__blur(element,messages){
      var message = element.querySelector('.form-message');
      message.innerText = messages;
      element.classList.add('invalid');
  }
  var isFormValid = true;
  input.forEach((blurs,index) =>{
      blurs.onblur = function(){
          if(index == 0){
              function tests(){
                  return input[0].value.length >= 3 ? undefined :  `Vui lòng nhập tối thiểu 3 kí tự`;
              }
              if(tests() == null){
                  return true
              }
              else{
                  var mess = tests();
                  add__blur(input[0].parentElement,mess);
              }
          }
          else if(index == 1){
              function tests(){
                  return validateEmail(input[1].value)  ? undefined :  `Trường này phải là Email`;
              }
              if(tests() == null){
                  return true
              }
              else{
                  var mess = tests();
                  add__blur(input[1].parentElement,mess);
              }
          }
          else if(index == 2){
              function tests(){
                  return input[2].value.length >= 5 ? undefined :  `Vui lòng nhập tối thiểu 5 kí tự`;
              }
              if(tests() == null){
                  return true
              }
              else{
                  var mess = tests();
                  add__blur(input[2].parentElement,mess);
              }
          }
          else if(index == 3){
              function tests(){
                  return sdt(input[3].value)  ? undefined :  `Trường này phải là sdt`;
              }
              if(tests() == null){
                  return true
              }
              else{
                  var mess = tests();
                  add__blur(input[3].parentElement,mess);
              }
          }
      }
      blurs.oninput = function(){
          if(index == 0){
              remove_oninput(input[0].parentElement);
              isFormValid = true;
          }
          if(index == 1){
              remove_oninput(input[1].parentElement);
              isFormValid = true;
          }
          if(index == 2){
              remove_oninput(input[2].parentElement);
              isFormValid = true;
          }
          if(index == 3){
              remove_oninput(input[3].parentElement);
              isFormValid = true;
          }
      }
  })
  const print = document.querySelector('.btn__print');
  print.onclick = function(evt){
      for(var i = 0; i < input.length;i++){
          if(i == 0){
              function tests(){
                  return input[0].value.length >= 3 ? undefined :  `Vui lòng nhập tối thiểu 3 kí tự`;
              }
              if(tests() == null){
              }
              else{
                  var mess = tests();
                  add__blur(input[0].parentElement,mess);
                  isFormValid = false;
              }
          }
          else if(i == 1){
              function tests(){
                  return validateEmail(input[1].value)  ? undefined :  `Trường này phải là Email`;
              }
              if(tests() == null){
              }
              else{
                  var mess = tests();
                  add__blur(input[1].parentElement,mess);
                  isFormValid = false;
              }
          }
          else if(i == 2){
              function tests(){
                  return input[2].value.length >= 5 ? undefined :  `Vui lòng nhập tối thiểu 5 kí tự`;
              }
              if(tests() == null){
              }
              else{
                  var mess = tests();
                  add__blur(input[2].parentElement,mess);
                  isFormValid = false;
              }
          }
          else if(i == 3){
              function tests(){
                  return sdt(input[3].value)  ? undefined :  `Trường này phải là sdt`;
              }
              if(tests() == null){
              }
              else{
                  var mess = tests();
                  add__blur(input[3].parentElement,mess);
                  isFormValid = false;
              }
          }
      }
      if(isFormValid == true){
          /*  */
          const formPrint = document.querySelector('.modal__print');
          formPrint.classList.add('modal__print-active');
          const form__close = document.querySelector('.modal__overlay-print');
          var list = JSON.parse(localStorage.getItem('cart'));
          var str = "";
          var t = 0;
          var coin = 0;
          for (x of list) {
              t = x.price * x.quantity;
              coin += t;
              str += `  <div class="content__hang-item">
              <div class="title__hang-item">
                  ${x.name}
              </div>
              <div class="title__hang-item">
                  ${x.price}
              </div>
              <div class="title__hang-item">
                  ${x.quantity}
              </div>
              <div class="title__hang-item">
                  ${t}
              </div>
          </div>
               `;
          }
          const hang = document.querySelector('.content__hang');
          hang.innerHTML = str;
          const tongtien = document.querySelector('.tong__tien');
          tongtien.innerText = coin;
          var name,email,dt,diachi;
          const info__customer = document.querySelectorAll('.auth-form__input');
          info__customer.forEach((info,index) => {
              if(index == 0){
                  name = info.value;
              }
              if(index == 1){
                  email = info.value;
              }
              if(index == 2){
                  diachi = info.value;
              }
              if(index == 3){
                  dt = info.value;
              }
          })
          const info__print = document.querySelectorAll('.info__customer');
          info__print.forEach((info,index) => {
              if(index == 0){
                  info.innerText = `Tên Khách hàng: ${name}`;
              }
              if(index == 1){
                  info.innerText = `Địa Chỉ: ${diachi}`;
              }
              if(index == 2){
                  info.innerText = `Số điện thoại: ${dt}`;
              }
              if(index == 3){
                  info.innerText = `Email: ${email}`;
              }
          })
          setTimeout(function(){
              window.print();
          },1)
          form__close.onclick = function(){
              formPrint.classList.remove('modal__print-active');
          }
      }
  }
  function validateEmail(email) 
  {
      var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(email);
  }
  function sdt(sdt) 
  {
      var regex = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
      return regex.test(sdt);
  }
},false)