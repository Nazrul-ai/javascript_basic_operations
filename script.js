const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
   
  ];
  const dummyArray= [{name: "Nazrul" , age: 23, city: "gaya"}];

  
  // 1. Print Developers
  function printDeveloper() {
    console.log(data);
  }
  
  // 2. Add Data

  function addData() {
    let no_of_users = parseInt(prompt("Enter how many users you want to add"));
    for(let i = 0; i < no_of_users; i++){
    let newname = prompt("enter the name of "+parseInt(i+1));
    let newage = prompt("enter the age "+parseInt(i+1))
    let newprof = prompt("enter the profession of " +parseInt(i+1));
    var newobj = {name:newname, age:newage, profession:newprof};
    data.push(newobj);
    console.log(data);
    }

  }

  
  // 3. Remove Admins
  function removeAdmin() {
delete data[1].profession;
console.log(data);
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    let example = data.concat(dummyArray);
    console.log(example);
    // console.log(data + dummyArray);
  }
  
  // 5. Average Age
  function averageAge() {
    // let a1 = data[0].age;
    // let a2 = data[1].age;
    // let sum=a1+a2;
    // console.log(sum)
    let sum  = 0;
    for(let i = 0; i < data.length;  i++){
        
        let aver = parseInt(data[i].age);
        // console.log(aver);

        
        sum =sum + aver;


    }
    console.log(sum/data.length);    
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    let greaterAge;
    for(let i = 0 ; i < data.length; i++){
        if(data[i].age > 25){
            greaterAge = data[i].age;
        }
    }
    console.log(greaterAge);
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    let uniqueprof;
    let i;
   
    for(i = 0; i < data.length-1; i++){
        
        if(data[i+1].profession == data[i].profession){
             uniqueprof = data[i].profession;
             console.log(uniqueprof); 
        }
        console.log(data[i].profession);
    }
    console.log(data[data.length-1].profession);
   
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort(function(a , b){
    if(a.age < b.age)
    return -1;
else if(a.age > b.age)
return 1;
else 0;
    });

    
    //return a.age - b.age;
    console.log(data);

  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    for(let i = 0; i < data.length; i++){
        if(data[i].name == "john"){
            data[i].profession ="Banker";
        }
    }
    console.log(data);
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    let count =  0;
    for(let i = 0; i < data.length; i++){
        if(data[i].profession){
            count++;
        }
    }
    console.log(count);
  }