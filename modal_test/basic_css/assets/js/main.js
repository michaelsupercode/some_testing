
const USERS = [ 
    { name: "anja", secret: "1234" },
];


let inputName = document.getElementById("User"); 
let userOut = document.getElementById("logOut"); 
let user = document.getElementById("username"); 
let pw = document.getElementById("pass"); 

let submit = document.getElementById("send"); 

let wrong = document.getElementById("error"); 



    submit.addEventListener("click", (event) => {
        event.preventDefault();
        let checkuserName = user.value;
        let checkpw = pw.value; 
        for(i = 0; i < USERS.length; i++) {
            if(checkuserName == USERS[i].name && checkpw ==  USERS[i].secret ) {
                document.cookie = `userLog = ${checkuserName}; max-age=` + 60*60*24*999; 
                inputName.innerText = document.cookie.split('=')[1];
                document.getElementById("modal").style.display = "none";
            }else if(checkuserName != USERS[i].name) {
                wrong.innerText = "*user does not exist";
            }else if(checkpw != USERS[i].secret) {
                wrong.innerText = "password is wrong";
            }
        
        };
    });

userOut.addEventListener("click", () => {
    document.cookie = "userLog=; expires=Wed, 01 Jan 2070 00:00:00 UTC;";
    location.reload();
    
});















// let user1 = ["supercode",  "no_one_will_know"];
// let user2 = ["music_fan_1990", "WeAreTheChampi0ns"];
// let user3 = ["admin",  "1234"];


// submit.addEventListener('click', (event) => {
//      event.preventDefault;
//     let checkuserName = user.value;
//     let checkpw = pw.value;
//     if( checkuserName == USERS.name && checkpw ==  USERS.secret ) {
//         console.log("klappt");
//         document.getElementById("modalBackground").hidden = true;
//         inputName.innerText = user.value;
//         document.cookie = `userLog = ${cookieVal}; max-age=` + 60*60*24*999; 

//     }else if(checkuserName != USERS.name) {
//         wrong.innerText = "*user does not exist";
//     }else if(checkpw != USERS.secret) {
//         wrong.innerText = "password is wrong";
//     }

// })

// console.log(user1, user2 ,user3);




