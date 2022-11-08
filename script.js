let buttons = document.querySelectorAll('.button1');

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        a = button.id;
        globalThis.x = 0;
        button.style.background = '#26c0ab';
        button.style.color = '#00494d';
        if(a == 'bt1'){
            globalThis.value = 0.05;
            
        }else if(a == 'bt2'){
            globalThis.value = 0.1;
            
        }else if(a == 'bt3'){
            globalThis.value = 0.15;
           
        }else if(a == 'bt4'){
            globalThis.value = 0.2;
            
        }else if(a == 'bt5'){
            globalThis.value = 0.5;
            
        }else{
            console.log(document.getElementById("custom").value);
        }
    })
})

function calculate() {
    const inputbill = document.getElementById("amount").value;
    const inputpeople = document.getElementById('numberp').value;
    const custompay = document.getElementById('custom').value;
    if(custompay != 0){
        document.getElementById('tip2').innerText = '₹' + (custompay/inputpeople).toFixed(2).toString();
        document.getElementById('total2').innerText = '₹' + (((parseInt(custompay) + parseInt(inputbill))/inputpeople).toFixed(2)).toString();
    }else{
        document.getElementById('total2').innerText = '₹' + (((inputbill * (1 + value))/inputpeople).toFixed(2)).toString();
        document.getElementById('tip2').innerText = '₹' + (((inputbill * value)/inputpeople).toFixed(2)).toString();
    }
    
}

function reset() {
    location.reload();
}
