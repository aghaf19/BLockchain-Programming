//*****Cv Through Array*****////


console.log("============CV=============");

var Cv_Tilttle = ["Name :","fname :","Email :","Dob :","Qualification :"]
var Cv_Data = ["Faizan","Kamran","aghafaizan19@gmail.com","03-01-1999","BSCE"]

function PersonalCv(){
    
    for(i=0;i<Cv_Tilttle.length;i++)
    {
        console.log(Cv_Tilttle.slice(i,i+1) + Cv_Data.slice(i,i+1));
    }
}
 PersonalCv()


//         Sorted Array DAta


console.log("============DATA===========");

var num = ["pc1","pc8","pc10","pc0","pc2","pc5","pc4"]
var sorted = num.sort();
console.log("Sequenced Data is :" + sorted);


//**********Splice Array Data**********/

console.log("============DATA===========");

var array1 = ["Faizan","Agha","99","100","101","102"]
var removed = array1.splice(2,0, "ali");

console.log("After Adding Values :" + array1);

var After_rem = array1.splice(3,1);

console.log("After Removing Values :" + After_rem);
console.log("After Adding Values :" + array1);


