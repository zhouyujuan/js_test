
function democlick(){
	var x;
   var number = window.document.getElementById("inputNumber").value;
   if(number <= 70 && number >=0){
   	 x = "四等生";
   }else if(number <=80 && number >70){
   	 x = "三等生";
   }else if(number <= 90 && number >80){
   	 x = "二等生";
   }else if(number <=100 && number >90){
     x = "一等生"
   }else{
      x = "输入错误"
   }
   window.document.getElementById("result").innerHTML = x;
}



