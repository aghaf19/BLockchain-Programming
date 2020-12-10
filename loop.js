// Right triangle using for loop//
 function generatePyramid(num) {
 let char = '';
for (let i = 1; i <= num; i++) {
    console.log(char += starFunction());
    }
    function starFunction() {
        return '*';
        }
    }
    generatePyramid(5); 

// Right triangle using for loop//

    var star = '';
    var  i;
    for ( i = 1; i <= 5; i++)
    console.log(star += '*' );
     
   
   
   
   
   // triangle using for loop//
   
   
   var star = '',
   space= '',
   i,j,k,
   n=5,
   m= n-1;
   for ( i = 1; i <= n; i++)
   {
   for (j =m ; j >= 1; j--)
     {
     space = space + (" ")
     }
     m--;
     for ( k = 1; k <= i * 2 - 1; k++) 
     {
   star = star + "*"
   }
   console.log (space + star)
   space = '';
   star = "";
   }
   

   
   
       
    
    
   