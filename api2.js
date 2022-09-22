function getData() {

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
                console.log(username);
                let sal=100000;
                output += `
                <div class="container">
                    <div class="card" style="width:300px">
                        <img class="card-img-top" src="${lists.picture.large}" alt="Card image",>
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
            
        });
};
getData();
