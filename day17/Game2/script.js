let todo=[];
let req = prompt("Enter your request:");

while(true){
    if(req=="quit"){
        console.log("quitting app");
        console.log("------------")
        break;
    }

    if(req=="list"){
        for(let i=0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("------------");
    }else if(req=="add"){
        let task = prompt("Enter the task to be added");
        todo.push(task);
        console.log("Task added");
        console.log("------------");
    }else if(req=="delete"){
        let idx = prompt("Enter the index of the task which you need to delete");
        todo.splice(idx, 1);
        console.log("Task deleted");
        console.log("------------");
    }else{
        console.log("Wrong request");
        console.log("------------");
    }
    req=prompt("Enter your request");
}