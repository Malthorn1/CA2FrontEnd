import 'bootstrap/dist/css/bootstrap.css'

/* 
////////////////////
URLS ANDD EVENTLISTENERS START
///////////////////
*/
let GetAllPersonsUrl = "http://localhost:8080/CA2/api/person/all" ; 
let GetPersonByIdUrl = "http://localhost:8080/CA2/api/person/id/"; 
let GetAllPersonsByZipCodeUrl = "http://localhost:8080/CA2/api/cityinfo/zipcode/"; 
let GetPersonByPhoneNumberUrl = "http://localhost:8080/CA2/api/phone/"; 
let GetPersonByHobbyUrl = "https://casperprejler.xyz/CA1/api/groupmembers/members/"; 
let PostPersonUrl = "http://localhost:8080/CA2/api/person/add"; 
let PostStreetUrl = "http://localhost:8080/CA2/api/address/add/" ;  
let PostCityInfoUrl = "http://localhost:8080/CA2/api/cityinfo/add/" ; 
let PostPhoneUrl = "http://localhost:8080/CA2/api/phone/add/" ; 
//let PutPersonUrl = "https://casperprejler.xyz/CA1/api/groupmembers/members/"; 


document.getElementById('getAllPersons').addEventListener("click", getAllPersons);
document.getElementById('getPersonById').addEventListener("click", getPersonById);
document.getElementById('getPersonByZipCode').addEventListener("click", getAllPersonsByZipCode);
document.getElementById('getPersonByPhoneNumber').addEventListener("click", getPersonByPhoneNumber);
document.getElementById('CreatePerson').addEventListener("click", createInputFieldsCreatePersonWithInformation);

/* 
////////////////////
URLS ANDD EVENTLISTENERS END
///////////////////
*/


/* 
////////////////////
POSTMAN METHODS  START 
///////////////////
*/

function PostmanSetting(method, person) {
    var opts = {
        method: method,
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        }
    }
    if (person) {
        opts.body = JSON.stringify(person);
    
    }
    return opts;
}

/* 
////////////////////
POSTMAN METHODS  START 
///////////////////
*/


/* 
////////////////////
GET PERSON BY ID  START 
///////////////////
*/

function getPersonById () {
     
    let id = document.getElementById('PersonId').value; 
    fetch(GetPersonByIdUrl+id)
.then(res => res.json()) //in flow1, just do it
.then(data => {
// Inside this callback, and only here, the response data is available
   console.log("data",data); 
   
   TableDiv.innerHTML = personTable(data);

})}


function personTable(person) {
    var tabledataId = "<table id='indextable' class='table'>" +
            "<tr><th>Person ID</th>" +
            "<th>Email</th>" +
            "<th>First Name</th>" +
            "<th>Last Name</th></tr>" +
            "<tr><td>" + person.id + "</td><td>" + person.email + "</td><td>" + person.firstName + "</td>" +
            "<td>" + person.lastName + "</tr></table>";
    return tabledataId;

}
/* 
////////////////////
GET PERSON BY ID  END 
///////////////////
*/

/* 
////////////////////
GET ALL PERSONS START
///////////////////
*/

function getAllPersons () {
    fetch(GetAllPersonsUrl)
    .then(res => res.json()) //in flow1, just do it
    .then(data => {
    // Inside this callback, and only here, the response data is available
       console.log("data",data);
       
        TableDiv.innerHTML = AllPersonTable(data); 
    })}
 
    function AllPersonTable(person) {
        let tempdata = ""
        let JSONlength = Object.keys(person.all).length;
        let tabledataAll = "<table id='indextable' class='table'>" +
        "<tr><th>Person ID</th>" +
        "<th>Email</th>" +
        "<th>First Name</th>" +
        "<th>Last Name</th></tr>"

        for (let i = 0; i < JSONlength; i++) {
            tempdata = tempdata + "<tr><td>" + person.all[i].id + "</td><td>" + person.all[i].email + "</td><td>" + person.all[i].firstName + "</td>" +"<td>" +person.all[i].lastName + "</td>"      
          } 
tabledataAll = tabledataAll + tempdata
tabledataAll = tabledataAll+"</tr></table>";
return tabledataAll;
    }

/* 
////////////////////
GET ALL PERSONS END
///////////////////
*/

/* 
////////////////////
GET PERSONS BY ZIPCODE START 
///////////////////
*/


    function getAllPersonsByZipCode () {
     
        let zipCode = document.getElementById('ZipCode').value; 
        fetch(GetAllPersonsByZipCodeUrl+zipCode)
    .then(res => res.json()) //in flow1, just do it
    .then(data => {
    // Inside this callback, and only here, the response data is available
       console.log("data",data);         
       TableDiv.innerHTML = GetPersonsByZipCodeTable(data);

    })}

    function GetPersonsByZipCodeTable(person) {
        let tempdata = ""
        let JSONlength = Object.keys(person).length;
        let tabledataAll = "<table id='indextable' class='table'>" +
        "<tr><th>Person ID</th>" +
        "<th>Email</th>" +
        "<th>First Name</th>" +
        "<th>Last Name</th></tr> "
        for (let i = 0; i < JSONlength; i++) {
            tempdata = tempdata + "<tr><td>" + person[i].id + "</td><td>" + person[i].email + "</td><td>" + person[i].firstName + "</td>" +"<td>" +person[i].lastName + "</td>"      
          } 
         
tabledataAll = tabledataAll + tempdata
tabledataAll = tabledataAll+"</tr></table>";
return tabledataAll;
    }

/* 
////////////////////
GET PERSONS BY ZIPCODE END 
///////////////////
*/



/* 
////////////////////
GET PERSONS BY Phone Number START 
///////////////////
*/


function getPersonByPhoneNumber () {
     
    let phoneNumber = document.getElementById('phoneNumber').value; 
    fetch(GetPersonByPhoneNumberUrl+phoneNumber)
.then(res => res.json()) //in flow1, just do it
.then(data => {
// Inside this callback, and only here, the response data is available
   console.log("data",data);         
   TableDiv.innerHTML = GetPersonsByPhoneNumberTable(data);

})}

function GetPersonsByPhoneNumberTable(person) {
    var tabledataPhoneNumber = "<table id='indextable' class='table'>" +
    "<tr><th>Person ID</th>" +
    "<th>Email</th>" +
    "<th>First Name</th>" +
    "<th>Last Name</th></tr>" +
    "<tr><td>" + person.id + "</td><td>" + person.email + "</td><td>" + person.firstName + "</td>" +
    "<td>" + person.lastName + "</tr></table>";

return tabledataPhoneNumber;
}

/* 
////////////////////
GET PERSONS BY PHONE NUMBER END 
///////////////////
*/

/* 
////////////////////
ADD NEW PERSON PART 1 START 
///////////////////
*/



function createInputFieldsCreatePersonWithInformation() {

    let PersonInformationForm =
            "<form>" +
            //FirstName
            "<label for='fname'>First name:</label><br>" +
            "<input type='text' id='fname' name='fname'><br>" +
            //LastName
            "<label for='lname'>Last name:</label><br>" +
            "<input type='text' id='lname' name='lname'><br>" +
            //Email
            "<label for='email'>Email:</label><br>" +
            "<input type='text' id='email' name='email'><br>" +
            //Street
            "<label for='street'>Street:</label><br>" +
            "<input type='text' id='street' name='street' ><br><br>" +
            //AdditionalInfo
            "<label for='additionalinfo'>Additional Info about street:</label><br>" +
            "<input type='text' id='additionalinfo' name='additionalinfo' ><br><br>" +
            //ZipCode
            "<label for='zipcode'>Zipcode (must be a number):</label><br>" +
            "<input type='number' id='zipcode' name='zipcode' ><br><br>" +
            //City
            "<label for='city'>City:</label><br>" +
            "<input type='text' id='city' name='city' ><br><br>" +
            "</form> ";


    let PhoneNumberForm = 
            "<form>" +
            //PhoneNumber
            "<label for='pnumber'>Phone number:</label><br>" +
            "<input type='text' id='pnumber' name='pnumber'><br>" +
            //Phone Description
            "<label for='pdescription'>Phone description:</label><br>" +
            "<input type='text' id='pdescription' name='pdescription'><br>" +
            "</form> ";


    let response =
            //CreatePerson BTN
            "<button type='button' class='btn btn-primary' id='createPersonWithInformation'>Create Person </button>" +
            "<p id='creation_Response'></p>";

    TableDiv.innerHTML = PersonInformationForm+ PhoneNumberForm  + response;
    document.getElementById('createPersonWithInformation').addEventListener("click", createPersonWithInformation);  
}


function createPersonWithInformation() {
    let firstname = document.querySelector("#fname").value;
    let lastname = document.querySelector("#lname").value;
    let email = document.querySelector("#email").value;
    let createPersonID ;
    let person = {"email": email, "firstName": firstname, "lastName": lastname } 

    let postPerson = PostmanSetting('POST', person);
    fetch(PostPersonUrl, postPerson)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                if (data.code === 400) {
                    console.error('Fail:', data);
                    document.getElementById("creation_Response").innerHTML = data.message;
                } else if (data.code === 500) {
                    document.getElementById("creation_Response").innerHTML = "<br><p>An error has occured, please try again at a later time.</p>";
                } else {
                    console.log('Success:', data);
                    document.getElementById("creation_Response").innerHTML = firstname + " has been created, with id: "+ data.id;
                    createPersonID = data.id; 
                    createPersonWithAdditionalInformation(createPersonID)
                }
            });
}
/* 
////////////////////
ADD NEW PERSON PART 1 END 
///////////////////
*/


/* 
////////////////////
ADD NEW PERSON PART 2 START 
///////////////////
*/
function createPersonWithAdditionalInformation(id) {
    let street = document.querySelector("#street").value;
    let additionalInfo = document.querySelector("#additionalinfo").value;
    let zipCode = document.querySelector("#zipcode").value;
    let city = document.querySelector("#city").value;
    let PhoneNumber = document.querySelector("#pnumber").value;
    let phoneDescription = document.querySelector("#pdescription").value;


    let JSONStreet = {"street": street,  "additionalInfo": additionalInfo } 
    let JSONCityInfo = {"ZipCode": zipCode,  "city": city } 
    let JSONPhone = {"number": PhoneNumber,  "description": phoneDescription } 

    let postStreetUrlWithID = PostStreetUrl+id; 
    let postCityInfoUrlWithID = PostCityInfoUrl+id; 
    let postPhoneUrlWithID = PostPhoneUrl+id; 

    let postStreet = PostmanSetting('POST', JSONStreet);
    let postCityInfo = PostmanSetting('POST', JSONCityInfo);
    let postPhone = PostmanSetting('POST', JSONPhone);


    functionAddPersonFetch(postCityInfoUrlWithID, postCityInfo) ; 
    functionAddPersonFetch(postStreetUrlWithID, postStreet) ; 
    functionAddPersonFetch(postPhoneUrlWithID, postPhone)



}

function functionAddPersonFetch (PostUrl, JSONSTRING) {
    fetch(PostUrl, JSONSTRING)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                if (data.code === 400) {
                    console.error('Fail:', data);
                    document.getElementById("creation_Response").innerHTML = data.message;
                } else if (data.code === 500) {
                    document.getElementById("creation_Response").innerHTML = "<br><p>An error has occured, please try again at a later time.</p>";
                } else {
                    console.log('Success:', data);
                }
            }); 
}

/* 
////////////////////
ADD NEW PERSON PART 2 END 
///////////////////
*/
