const toggle = document.getElementById("checkbox");
const month = document.getElementById("month");
const year = document.getElementById("year");
const dis = document.getElementById("discount");
const ex1= document.getElementById("ex1");
const ps1 = document.getElementById("ps1");
const price1 = document.getElementById("price1");
const month1 = document.getElementById("month1");
const ex2= document.getElementById("ex2");
const ps2 = document.getElementById("ps2");
const price2 = document.getElementById("price2");
const month2 = document.getElementById("month2");
const ex3= document.getElementById("ex3");
const ps3 = document.getElementById("ps3");
const price3 = document.getElementById("price3");
const month3 = document.getElementById("month3");



toggle.addEventListener('click', function(){
    if(toggle.checked == true){
        month.style.color= "black";
        dis.style.textDecoration="line-through";
        dis.style.opacity="0.5";
        year.style.color="grey";
        ex1.style.display="none";
        ps1.style.display="none";
        price1.innerText="9,900원";
        price1.style.paddingTop="25px";
        month1.style.paddingTop="40px";
        ex2.style.display="none";
        ps2.style.display="none";
        price2.innerText="39,900원";
        price2.style.paddingTop="25px";
        month2.style.paddingTop="40px";
        ex3.style.display="none";
        ps3.style.display="none";
        price3.innerText="74,900원";
        price3.style.paddingTop="25px";
        month3.style.paddingTop="40px";
    } else{
        year.style.color= "grey";
        dis.style.textDecoration="none";
        dis.style.opacity="1";
        year.style.color="black";
        ex1.style.display="inline";
        ps1.style.display="inline";
        price1.innerText="7,900원";
        price1.style.paddingTop="0px";
        month1.style.paddingTop="15px";
        ex2.style.display="inline";
        ps2.style.display="inline";
        price2.innerText="24,900원";
        price2.style.paddingTop="0px";
        month2.style.paddingTop="15px";
        ex3.style.display="inline";
        ps3.style.display="inline";
        price3.innerText="39,900원";
        price3.style.paddingTop="0px";
        month3.style.paddingTop="15px";
    }
})