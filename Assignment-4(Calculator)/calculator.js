function add(){
    var num_1=parseFloat(document.getElementById("num1").value);
    var num_2=parseFloat(document.getElementById("num2").value);
    var res=num_1+num_2;
   document.getElementById("result").textContent="Results:"+res;
}
function sub(){
    var num_1=parseFloat(document.getElementById("num1").value);
    var num_2=parseFloat(document.getElementById("num2").value);
    var res=num_1-num_2;
   document.getElementById("result").textContent="Results:"+res;
}
function mul(){
    var num_1=parseFloat(document.getElementById("num1").value);
    var num_2=parseFloat(document.getElementById("num2").value);
    var res=num_1*num_2;
   document.getElementById("result").textContent="Results:"+res;
}
function div(){
    var num_1=parseFloat(document.getElementById("num1").value);
    var num_2=parseFloat(document.getElementById("num2").value);
    var res=num_1/num_2;
   document.getElementById("result").textContent="Results:"+res;
}
function sol(){
    var num_1=parseFloat(document.getElementById("num1").value);
    var num_2=parseFloat(document.getElementById("num2").value);
    var res1=num_1+num_2;
    var res2=num_1-num_2;
    var res3=num_1*num_2;
    var res4=num_1/num_2;
   document.getElementById("result").textContent="Results:"+"Sum="+res1+",     "+
   "Subtract="+res2+", "+
   "Multiplication="+res3+", "+  
   "Division="+res4;

}