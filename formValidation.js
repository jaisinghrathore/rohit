
let initialState = {
    first_name:"",
    last_name:"",
    department:"",
    user_name:"",
    user_password:"",
    confirm_password:"",
    email:"",
    contact_no:""
}

  let errors={
        first_name:".",
        last_name:".",
        department:".",
        user_name:".",
        user_password:".",
        confirm_password:".",
        email:".",
        contact_no:"."
    }
    

    const submiSimpli = (a,c) => {
            errors={...errors,'first_name':c};
            document.querySelector(`.${a}`).innerText = c;
        }



    const error = (event) => {


        
     if(initialState.first_name.length>=1 && event.target.name=="first_name" ){
        errors={...errors,[event.target.name]:""};
        document.querySelector(".one").innerText = "";
    }
     if(initialState.last_name.length>=1 && event.target.name=="last_name" ){
        errors={...errors,[event.target.name]:""};
        document.querySelector(".two").innerText = "";
    }
     if(initialState.first_name.length>=1 && event.target.name=="department" ){
        errors={...errors,[event.target.name]:""};
        document.querySelector(".three").innerText = "";
    }
     if(initialState.first_name.length>=1 && event.target.name=="user_name" ){
        errors={...errors,[event.target.name]:""};
        document.querySelector(".four").innerText = "";
    }
     if(initialState.first_name.length>=1 && event.target.name=="user_password" ){
        errors={...errors,[event.target.name]:""};
        document.querySelector(".five").innerText = "";
    }
     if(initialState.email.match(/([a-zA-Z0-9]+)([\_\.\-{1}])?([a-zA-Z0-9]+)\@([a-zA-Z0-9]+)([\.])([a-zA-Z\.]+)/g) && event.target.name=="email" ){
        errors={...errors,[event.target.name]:""};
        document.querySelector(".seven").innerText = "";
    }
     if(initialState.contact_no.match(/^(\+\d{1,3}[- ]?)?\d{10}$/) && event.target.name=="contact_no" ){
        errors={...errors,[event.target.name]:""};
        document.querySelector(".eight").innerText = "";
    }
     if(initialState.user_password === initialState.confirm_password && event.target.name=="confirm_password" ){
        errors={...errors,[event.target.name]:""};
        document.querySelector(".six").innerText = "";
    }


         
    if(initialState.first_name.length<1 && event.target.name=="first_name" ){

        errors={...errors,[event.target.name]:"firstname required"};
        document.querySelector(".one").innerText = "firstname required";
    }


     if(initialState.last_name.length<1 && event.target.name=="last_name" ){
        
                errors={...errors,[event.target.name]:"lastname required"};
                document.querySelector(".two").innerText = "lastname required";
    }
    
    
    
     if(initialState.department.length<1 && event.target.name=="department" ){

                errors={...errors,[event.target.name]:"department required"};
                document.querySelector(".three").innerText = "department required";
    }
    
    
    
     if(initialState.user_name.length<1 && event.target.name=="user_name" ){

                errors={...errors,[event.target.name]:"user_name required"};
                document.querySelector(".four").innerText = "user_name required";
    }
    
    
    
     if(initialState.user_password.length<1 && event.target.name=="user_password" ){

                errors={...errors,[event.target.name]:"user_password required"};
                document.querySelector(".five").innerText = "user_password required";
    }
    
    
    
     if(initialState.user_password !== initialState.confirm_password && event.target.name=="confirm_password" ){
        
                errors={...errors,[event.target.name]:"Password isn't matched!"};
                document.querySelector(".six").innerText = "Password isn't matched!";
    }
    
    
     if(!initialState.email.match(/([a-zA-Z0-9]+)([\_\.\-{1}])?([a-zA-Z0-9]+)\@([a-zA-Z0-9]+)([\.])([a-zA-Z\.]+)/g) && event.target.name=="email" ){

                errors={...errors,[event.target.name]:"invalid email!"};
                document.querySelector(".seven").innerText = "invalid email!";
    }
    
    
    
     if(!initialState.contact_no.match(/^(\+\d{1,3}[- ]?)?\d{10}$/) && event.target.name=="contact_no" ){
                
                errors={...errors,[event.target.name]:"invalid contact!"};
                document.querySelector(".eight").innerText = "invalid contact!";
    }


}


const changi = (event) => {
    const{name,value} = event.target;
    initialState[name]=value;
}


const blurry = (event) => {
    
   error(event);

}

function sub() {

new Promise((resolve, reject) => {

    if(initialState.first_name.length<1){submiSimpli("one","firstname required")}
    if(initialState.last_name.length<1){submiSimpli("two","lastname required")}
    if(initialState.department.length<1){submiSimpli("three","department required")}
    if(initialState.user_name.length<1){submiSimpli("four","user_name required")}
    if(initialState.user_password.length<1){submiSimpli("five","user_password")}
    if(initialState.user_password !== initialState.confirm_password){submiSimpli("six","Password did'nt match!")}
    if(!initialState.email.match(/([a-zA-Z0-9]+)([\_\.\-{1}])?([a-zA-Z0-9]+)\@([a-zA-Z0-9]+)([\.])([a-zA-Z\.]+)/g)){submiSimpli("seven","Invalid email!")}
    if(!initialState.contact_no.match(/^(\+\d{1,3}[- ]?)?\d{10}$/)){submiSimpli("eight","Invaid contact!")}
  resolve();  
}).then(()=>{
    if(Object.values(errors)[1].length === 0 && Object.values(errors)[2].length === 0 && Object.values(errors)[3].length === 0 &&Object.values(errors)[4].length === 0 && Object.values(errors)[5].length === 0 &&Object.values(errors)[6].length === 0 && Object.values(errors)[7].length === 0){
        console.log(initialState);     
    }
})


}