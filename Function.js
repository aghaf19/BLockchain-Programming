//             ***   Simple Function CV  ***//

console.log("=============CV=============");


function name()
{
    var name = "Faizan"
    console.log(name);
}

name();

function f_name()
{
    var f_name = "Kamran"
    console.log(f_name);
}

f_name();

function Mobile()
{
    var num = "03136016553"
    console.log(num);
}

Mobile();

function D_O_B()
{
    var DOB = "03-01-1999"
    console.log(DOB);
}

D_O_B();

function Email()
{
    var email = "aghafaizan10@gmail.com"
    console.log(email);
}

Email();

function Qualification()
{
    var quaf = "BSCE"
    console.log(quaf);
}

Qualification();



function Address()
{
    var add = " Karachi"
    console.log(add);
}

Address();



function Religion()
{
    var Rel = "Islam"
    console.log(Rel);
}

Religion();

   //Marks Sheet

console.log("=============MARKS SHeeT=============");





function Maths()
{
    var mth = "Maths = 80"
    console.log(mth);
}

Maths();

function Computer()
{
    var Comp = "Computer = 95"
    console.log(Comp);
}

Computer();

function English()
{
    var eng = "English = 70"
    console.log(eng);
}

English();

function Programming_Fundamentals()
{
    var pmg_f = "Programming Fundamentals = 90"
    console.log(pmg_f);
}

Programming_Fundamentals();

function Probability()
{
    var Prb = "Pobability = 85"
    console.log(Prb);
}

Probability();

function Digital_Logic_Design()
{
    var Dld = "Digital Logic Design = 75"
    console.log(Dld);
}

Digital_Logic_Design();

function Discrete_Structure()
{
    var Dis = "Discrete Dtructure = 80"
    console.log(Dis);
}

Discrete_Structure();

function Total_Marks()
{
    var tom = "Obtained Marks/Toatal Marks = 575/700"
    console.log(tom);
}

Total_Marks();

function Grades()
{
    var grd = "Grade = A+"
    console.log(grd);
}

Grades();

function Percentage()
{
    var per = "Percentage = 82"
    console.log(per);
}

Percentage();







   //Return Funtion CV 


console.log("=====================================================");
console.log("=============CV=============");
console.log("=====================================================");

function Name()
{
    return "Faizan"
}
var func1 = Name()
console.log(func1);


function F_Name()
{
    return "Kamran"
}
var func2 = F_Name()
console.log(func2);


function Mobile()
{
    return "03136016553"
}
var func3 = Mobile()
console.log(func3);


function DateofBirth()
{
    return "03-01-1999"
}
var func4 = DateofBirth()
console.log(func4);


function Email()
{
    return "aghafaizan19@gmail.com"
}
var func5 = Email()
console.log(func5);


function Qualification()
{
    return "BSCE"
}
var func6 = Qualification()
console.log(func6);


function Address()
{
    return " Karachi"
}
var func8 = Address()
console.log(func8);



function Religion()
{
    return "Islam"
}
var func10 = Religion()
console.log(func10);

   //Marks Sheet

console.log("=============MARKS SHeeT=============");

function Maths()
{
    return "Maths = 80"
}
var mth1 = Maths()
console.log(mth1);

function Computer()
{
    return "Computer = 95"
}
var comp2 = Computer()
console.log(comp2);

function English()
{
    return "English = 70"
}
var eng3 = English()
console.log(eng3);

function Programming_Fundamentals()
{
    return "Programming_Fundamentals = 90"
}
var pgf4 = Programming_Fundamentals()
console.log(pgf4);

function Probability()
{
    return "Probability = 85"
}
var pby5 = Probability()
console.log(pby5);

function Digital_Logic_Design()
{
    return "Digital Logic Design = 75"
}
var dld6 = Digital_Logic_Design()
console.log(dld6);

function Discrete_Structure()
{
    return "Discrete_Structure = 80"
}
var dis7 = Discrete_Structure()
console.log(dis7);

function Total_Marks()
{
    return "Total_Marks = 575/700"
}
var tom8 = Total_Marks()
console.log(tom8);

function Grades()
{
    return "Grades= A+"
}
var grd9 = Grades()
console.log(grd9);

function Percentage()
{
    return "Percentage = 82%"
}
var per10 = Percentage()
console.log(per10);


//*********** CV Through Anonymous Function*******//


console.log("====================CV===================");



var Name = function()
{
    return "Faizan"
}

var Ls_Name = function()
{
    return "Agha"
}

var F_Name = function()
{
    return "Kamran"
}

var D_O_B = function()
{
    return "03-01-1999"
}

var Mobile = function()
{
    return "03176016553"
}

var Email = function()
{
    return "aghafaizan19@gmail.com"
}

var Religion = function()
{
    return "Islam"
}

var Address = function()
{
    return " Karachi"
}

var Qualification = function()
{
    return "BS CE "
}



console.log(Name());
console.log(Ls_Name());
console.log(F_Name());
console.log(D_O_B());
console.log(Mobile());
console.log(Email());
console.log(Religion());
console.log(Address());
console.log(Qualification());



//*************Calculator Through Anonymous Function**************//

console.log("=================CALCULATOR=================");
var func = function (x,y)
{
    return x+y
}
function Add ()
{
    var result;
    result = func (20,10)
    console.log("The Addittion is : " + result);
}

Add()

var func = function (x,y)
{
    return x-y
}
function Sub ()
{
    var result;
    result = func (20,10)
    console.log("The Subtraction is : " + result);
}

Sub()


var func = function (x,y)
{
    return x*y
}
function mult ()
{
    var result;
    result = func (20,10)
    console.log("The Multiplication is : " + result);
}

mult()

var func = function (x,y)
{
    return x/y
}
function Div ()
{
    var result;
    result = func (20,10)
    console.log("The Division is : " + result);
}

Div()


//   Taxation Formula Through Anonymous Function


console.log("==================Taxation==================");



function Tax (salary,tax_per)
{
    return (salary*tax_per/100)
}
function Net_icome ()
{
    var result;
    result = Tax (70000,35)
    console.log("The Net Income is :"+ result);
}

Net_icome()

function Tax_1 (salary,tax_per)
{
    return (salary*tax_per/100)
}
function Net_icome_1 ()
{
    var result;
    result = Tax (70000,30)
    console.log("The Net Income is :"+ result);
}

Net_icome_1()

function Tax_2 (salary,tax_per)
{
    return (salary*tax_per/100)
}
function Net_icome_2 ()
{
    var result;
    result = Tax (70000,25)
    console.log("The Net Income is :"+ result);
}

Net_icome_2()
