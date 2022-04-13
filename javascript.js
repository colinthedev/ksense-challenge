const userNamesTable = document.querySelector("table");
const userPosts = document.querySelector('.userPostsContainer');

const getNames = async () => {
    try {
        let htmlContent = '';
        const fetchData = await fetch('https://jsonplaceholder.typicode.com/users');
        const usersJson = await fetchData.json();
        usersJson.map( user => htmlContent += `<tr><td><button onclick="getPost(${user.id})">${user.username}</button></td></tr>` );
        userNamesTable.innerHTML = htmlContent;
    } catch (error) {
        console.error(error);
    }
}

const getPost = async id => {
    try {
        let htmlContent = '';
        const fetchData = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
        const postsData = await fetchData.json();
        postsData.map( post => htmlContent += `<div class='postWrapper'><h1>User: ${id}</h1><h2>${post.title}</h2><h3>Body</h3><p>${post.body}</p></div>` );
        userPosts.innerHTML = htmlContent;
    } catch (error) {
        console.error(error);
    }
}

getNames();