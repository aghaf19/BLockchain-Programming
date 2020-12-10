class school
{
    constructor(schoolname,stname,classname, rollno,admissionfees, monthlyfees, extrafees, gamefees)
    {
        this.schoolname=schoolname
        this.st=stname
        this.cl=classname
        this.rollno=rollno
        this.admissionfees=admissionfees
        this.monthlyfees=monthlyfees
        this.extrafees=extrafees
        this.gamefees=gamefees
    }
    info()
    {
        console.log(this.schoolname)
        console.log(this.st)
        console.log(this.cl)
        console.log(this.rollno)
        console.log(this.admissionfees)
        console.log(this.monthlyfees)
        console.log(this.extrafees)
        console.log(this.gamefees)
    }

}
var details = new school("Sir Syed","faizan","Blockchain Programming","155",8000,15000,4000,7000)
details.info()



