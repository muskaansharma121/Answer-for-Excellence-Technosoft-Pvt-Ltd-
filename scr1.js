
fetch(' https://reqres.in/api/users')
.then(response =>response.json())
.then(json => {
console.log(json.data);
const markup =json.data.map

return'
 <li class="card-container">
<div class="image-container">
< img class="round" src="${el.avatar}">
</div>
<div class="name-container">
<span class="first name">${el.first_name}</span>
<span class= "last name">${el.last_name}</span>
</div>
<p class="email">${el.email}</p>
</li>
'
});
console.log(markup);
document.queryselector('.list_container').innerHTML=markup.join('');
}