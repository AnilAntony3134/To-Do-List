let button = document.getElementById('button')

let name,password,message;



button.addEventListener('click',(e)=>{

    name = document.getElementById('name').value

    password = document.getElementById('password').value

    validateform(name,password,(message) =>{
        alert(message)
    })
})

let validateform = (name,password,callback) =>{
    if(name =="" || password==""){
        callback("Please Enter all the fields")
    }
    else if(name == "admin" || password == "12345"){
        callback("Validated Successfully")
    }
  };
