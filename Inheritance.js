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
        super.doPrint() 
        console.log("Doctor name faizan") 
    }
}
class patient extends doctor 
{
    doPrint2() 
    { 
        super.doPrint1() 
        console.log("patient name ali") 
    }

}
var obj = new patient(); 
obj.doPrint2() 
