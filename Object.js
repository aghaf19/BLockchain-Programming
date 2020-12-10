// ***	OBJECT CONSTRUCTOR********//
var CV = new Object();
	var name="fullname"
CV[name]= "MUHAMMAD FAIZAN"
	CV.label="Fornt end desginer"
	CV.email="aghafaizan19@gmail.com"
	CV.phone="+923176016553",
	CV.location= {
	"address": "Block H",
	"postalCode": "74600",
	"city": "Karachi",
	"countryCode": "PK",
	"region": "Sindh"}
CV.profiles={
		"network": "Twitter",
		"username": "aghaf19",
	"url": "http://twitter.com/aghaf19"
}
    	CV.work= {
        	"company": "Company",
        	"position": "President",
        	"website": "http://company.com"
} ,
        	CV.skills= {
	"name": "Web Development,HTML,CSS,Javascript"
	},
	CV.languages={
	"language": "English"
	},
	CV.references= {
	"reference": "Reference"
	}
	console.log(CV["fullname"])
	console.log(CV["label"])
	console.log(CV["email"])
    console.log(CV["phone"])
    console.log(CV["location"])
    console.log(CV["profiles"])
    console.log(CV["work"])
    console.log(CV["skills"])
    console.log(CV["languages"])
    console.log(CV["references"])


    //******** CONSTRUCTOR FUNCTION ************//


	function education() {
	this.institution= "Sir Syed University Of Enginerring and Technolgy",
	this.area = "Computer Enginerring",
    this.studyType= "Bachelor",
	this.startDate= "2018-01-01",
	this.endDate= "2021-01-01"
	}
	var CV1= new education()
	console.log(CV1.institution)
	console.log(CV1.area)
	console.log(CV1.studyType)
	console.log(CV1.startDate)
	console.log(CV1.endDate)

                        