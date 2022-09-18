// class Person{
//     constructor(firstName, lastName, age, email){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.email = email;
//     };

//     toString(){
//         return `${this.firstName} ${this.lastName} (age: ${this.age} e-mail: ${this.email})`;
//     }
// };

function getPersons(){

    let personsData = [['Anna',	'Simpson',	22,	'anna@yahoo.com'], ['SoftUni'], ['Stephan',	'Johnson',	25], ['Gabriel',	'Peterson',	24,	'g.p@gmail.com']]    
        
    let persons = [];
     

    class Person{
        constructor(firstName, lastName, age, email){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        };
    
        toString(){
            return {firstName: `${this.firstName}`, lastName:`${this.lastName}`, age: `${this.age}`, email: `${this.email}`};
        }
    };

    let person;
    
    for(let i = 0; i < personsData.length; i++){
        person = new Person(personsData[i][0], personsData[i][1], personsData[i][2], personsData[i][3]);
        persons.push(person.toString());
    }



    return persons;
};

console.log(getPersons());