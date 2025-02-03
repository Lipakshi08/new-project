let todo = [];
let req = prompt('please enter your request ');

while(true){
    if (req == 'quite'){
        console.log("Quitting the app");
        break;
    }

 if(req == 'list'){
    console.log("------------------------------");
    
    for(i=0; i<=todo.length; i++){
        console.log(i, todo[i]);
    }
       console.log("------------------------------"); 

 } else if(req == "add"){
    let task = prompt("what do you want to add");
    todo.push(task);
    console.log("Task Added");

 } else if(req == "delete"){
    let idx = prompt("what do you want to delete enter index");
    todo.splice(idx, 1);
    console.log("task added");

 }else {
    console.log("wrong request");
 }

  req = prompt('please enter your request');
};