fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(data => {
            //local storege
            window.localStorage.setItem('details',JSON.stringify(data.results));
            items=JSON.parse(localStorage.getItem('details'));
            console.log(items[0].login.username)
            console.log(items[0].login.password)
            console.log(items);
        });
function getData() {
    //Get API
    items=JSON.parse(localStorage.getItem('details'));
            var us=document.getElementById("username").value;
            var pas=document.getElementById("pass").value;
            var username=[];
            var password=[]; 
            items.forEach(function (lists) {
                username.push(lists.login.username);
                password.push(lists.login.password);
            });
            var n=username.indexOf(us);
            console.log(n);
            if(n>=0){
                if(pas==password[n]){
                    window.open("api2.html")
                }
                else{
                    alert("wrong login");
                }
            }
        }
function display(){
    items=JSON.parse(localStorage.getItem('details'));
    let output = "<h2><center>Get User Data</center></h2>";
    items.forEach(function (lists) {
        let sal=100000;
        output += `
        <div class="container alert alert-success col-sm-3" >
            <div class="card" style="width:300px">
                <img class="card-img-top" src="${lists.picture.large}" alt="Card image">
                <div class="card-body">
                    <h4 class="card-title">${lists.name.first}</h4>
                    <h5 class="card-text">${lists.email}</h5>
                    <h5 class="card-text">${lists.location.country}</h5>
                    <h5 class="card-text">${sal}</h5>
                </div>
            </div>
        </div> `;
    });
    document.getElementById('output').innerHTML = output;
}
display()

