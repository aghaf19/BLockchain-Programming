//*******operator******//

var a=20,b=10,result;

//*****arithematic operator*****//
result=a+b;
console.log('sum='+result);

result=a-b;
console.log('subtraction='+result);

result=a*b;
console.log('multiplication='+result);

result=a/b;
console.log('division='+result);

result=a%b;
console.log('modulus='+result);

result=a++;
console.log('increment of a='+result);

result=++a;
console.log('increment of a='+result);

result=a--;
console.log('decrement of a='+result);

result=--a;
console.log('decrement of a='+result);

//******comparison operator*******//

result=(a==b);
console.log(+result);

result=(a<b);
console.log(+result);

result=(a>b);
console.log(+result);

result=(a!=b);
console.log(+result);

result=(a<=b);
console.log(+result);

result=(a>=b);
console.log(+result);

//*********logical operator********//

var a=true;b=false;

result=(a&&b);
console.log(+result);

result=(a||b);
console.log(+result);

result=(!(a&&b));
console.log(+result);

//*******bitwise operator********//

var a=3,b=2;

result=(a&b);
console.log(+result);

result=(a|b);
console.log(+result);

result=(a^b);
console.log(+result);

result=(-b);
console.log(+result);

result=(a<<b);
console.log(+result);

result=(a>>b);
console.log(+result);

result=(a>>>b);
console.log(+result);

//********assignment operator******//

var a=23,b=20;

result=(a=b);
console.log(+result);

result=(a+=b);
console.log(+result);

result=(a-=b);
console.log(+result);

result=(a*=b);
console.log(+result);

result=(a/=b);
console.log(+result);

result=(a%=b);
console.log(+result);

//*****Calculator*********//


var a=20,b=10,result;
result=a+b;
result1=a-b;
result2=a*b;
result3=a/b;
result4=a%b;
console.log('sum='+result);
console.log('subtraction='+result1);
console.log('multiplication='+result2);
console.log('division='+result3);
console.log('modulus='+result4);


//******* User Input Calculator**********//
// <!doctype html>
// <html>
// <head>
// <meta charset="utf-8">
// <title>Untitled Document</title>
// 	</head>
// 	<script>
// function calc() {
//     var w;
//     var x = parseInt(document.getElementById("num1").value);
//     var y = document.getElementById("operx").value;
//     var z = parseInt(document.getElementById("num2").value);
//     document.getElementById("result").innerHTML=w;
   
// 	if( y == "0"){
// 		w=x+z;
// 	   }
// 	 else if( y == "1"){
// 		w=x-z;
// 	   }
// 	 else if( y == "2"){
// 		w=x*z;
// 	   }
// 	 else if( y == "3" && z != 0){
// 		w=x/z;
// 	   }

// }
// </script>
	
// <body>
// <select id="operx">
//   <option value="0">+</option>
// <option value="1">-</option>
// <option value="2">*</option>
// <option value="3">/</option>
// </select>
// <input type="text" id="num2" value="">
// <input type="button" onClick="calc();" value="Solve"><br/><br/>
// <p id="result">The answer is : </p>
// </body>
// </html>