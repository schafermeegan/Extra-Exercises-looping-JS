`use strict`;

(function (){
    class Student {
        constructor (name, grade){
            this.name=name;
            this.grade=grade;
        }

    }

    let classroom = [];

    for (let i = 0; i < 5; i++) {  
        let herStudent=new Student(prompt(`What is your name?`), prompt(`what is your grade?`))   
    classroom.push(herStudent)
    }
    
    

console.log(classroom);




})();