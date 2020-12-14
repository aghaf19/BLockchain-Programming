class hospital
{ 
    doPrint() 
    {
     console.log("hospital name PATEL")
    }
} 
class doctor extends hospital
 {
    doPrint1() 
    { 
        console.log("Doctor name faizan") 
    }
}
var obj = new doctor();
obj.doPrint()  
obj.doPrint1() 

