class Landing{
    //property
    database={
        Nidha:{username:'Nidha',password:'nidha123'},
        Noora:{username:'Noora',password:'noora123'},
        Veena:{username:'Veena',password:'veena123'},

    }

//to sttore data to local storage
    saveData(){
     if(this.database){
        localStorage.setItem("database",JSON.stringify(this.database))
     }
    }

//to get data from local storage
 getData(){
 this.database = JSON.parse(localStorage.getItem("database"))
//  console.log(this.database);
 }
//method to register user
  register(){
    this.getData()
    //taking datas from input box using id.value
    let user = reguser.value
    let pswd = regpswd.value
    // console.log(user,pswd);
    if(user=='' || pswd==''){
        alert('please fill the form completely')
    }
    else{
        if(user in this.database){
            alert('Account already Exist')
        }
        else{
            this.database[user] = {username:user,password:pswd}
            alert('user added successfully')
            this.saveData()
            //navigate to login page
            window.location = "login.html"
        }
    }
  } 
  //method to login an user
  login(){
    this.getData()
    let user1 = loguser.value
    let pswd1 = logpswd.value
    if(user1=="" || pswd1==""){
        alert('please fill the form completely')
    }
    else{
        if(user1 in this.database){
            //to check whether the entered password is match with the password in database 
            if(this.database[user1].password==pswd1){
                alert('login successfull')
                localStorage.setItem("user",user1)
                //navigate to home
                window.location = "home.html"
            }
            else{
                alert("invalid password or username")
            }
        }
        else{
            alert('Account doesnot exist')
        }
    }
  }
  
}

//create object
const obj = new Landing()
obj.getData()
