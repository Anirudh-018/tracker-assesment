function getData() {
    console.log("clicked");
    //Get API
    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(data => {

            let author = data.results;

            let output = "<h2><center>Get User Data</center></h2>";

            //Get Data Loop Through
            const username=[];
            const password=[];
            author.forEach(function (lists) {
                username.push(lists.login.username);
                password.push(lists.login.password);
            });
            document.getElementById("givenus").innerHTML=username[0];
            document.getElementById("givenps").innerHTML=password[0];
            //make these as variables
            document.getElementById("username").value;
            document.getElementById("pass").value;
            var n=username.indexOf(us);
            if(n>0){
                if(pas==password[n]){
                    location.replace("api2.html")
                }
                else{
                    alert("wrong login");
                }
            }
        });
};
