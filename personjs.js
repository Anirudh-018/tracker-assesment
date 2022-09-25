fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(data => {
            //local storege
            window.localStorage.setItem('details',JSON.stringify(data.results));
            items=JSON.parse(localStorage.getItem('details'));
        });
var url = window.location.pathname;
var filename = url.substring(url.lastIndexOf('/')+1);
var id=filename[6]
function display(){
    items=JSON.parse(localStorage.getItem('details'));
    let lists=items[id-1]
    let output=''
    output+=`
    <div class="container alert alert-success col-sm-3" >
    <div class="card" style="width:300px">
    <img class="card-img-top" src="${lists.picture.large}" alt="Card image">
    <div class="card-body">
        <h4 class="card-title">${lists.name.first}</h4>
        <h5 class="card-text">${lists.email}</h5>
        <h5 class="card-text">${lists.location.country}</h5>
    </div>
    </div>
    </div>`
    document.getElementById('per').innerHTML = output;
}
function sub(){
    let exp=document.getElementById('expense').value;
    let sal=document.getElementById("salary").value;
    document.getElementById("save").value=sal-exp;
}
display();