const messageBox = document.querySelector("#users");
const userPosts = document.querySelector('#posts')

const getNames = () => {
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((jsonResponse) => {
        if (jsonResponse) {
            messageBox.innerHTML = jsonResponse.map((user) => {
                const userName = user.name
                const id = user.id
                let html = "<tr class='padding' id='line-" + id + "'>"
                html += "<td>" + "<button class='userButton' onclick='getPost(" + id + ")'>" + userName + "</button>" + "</td>"
                html += "</tr>"
                return html;
            });
        }
    }).catch(error => console.log(error));
}
getNames()

const getPost = (id) => {
fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    .then(response => response.json())
    .then(posts => {
        if (posts) {
            userPosts.innerHTML = posts.map((post) => {
                const postTitle = post.title
                const postBody = post.body
                let html = "<div class='postWrapper'>"
                html += "<h1>" + 'User:' + ' ' + id + "</h1>" 
                html += "<h1>" + postTitle + "</h1>" 
                html += "<h3>" + 'Body' + "</h3>" 
                html += "<p>" + postBody + "</p>" 
                html += "</div>"
                return html;
            })
        }
    }).catch(error => console.log(error));
}