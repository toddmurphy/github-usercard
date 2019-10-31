/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const cards = document.querySelector('.cards'); //main Parent to append 'githubCard'

axios
  .get('https://api.github.com/users/toddmurphy')
  .then(response => {
    // console.log(response);
    response.data.forEach(item => {
      const newCard = githubCard(item);
      console.log(item);
      cards.appendChild(newCard); //should output a bunch of cards
    });
  })
  .catch(error => {
    // console.log('Your response failed and data not returning', error);
  });
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

// githubCard gets appended to 'cards'
function githubCard(data) {
  //Create elements
  const card = document.createElement('div'); //main element we append all 'p'
  const githubName = document.createElement('p');
  const githubLogin = document.createElement('p');
  const githubLocation = document.createElement('p');
  const githubURL = document.createElement('p');
  const githubFollowers = document.createElement('p');
  const githubFollowing = document.createElement('p');
  const githubBio = document.createElement('p');
  const githubImg = document.createElement('img');

  //Set up structure of elements
  card.appendChild(githubName);
  card.appendChild(githubLogin);
  card.appendChild(githubLocation);
  card.appendChild(githubURL);
  card.appendChild(githubFollowers);
  card.appendChild(githubFollowing);
  card.appendChild(githubBio);
  card.appendChild(githubImg);

  //Setup classes
  card.classList.add('card');
  githubName.classList.add('name');
  githubLogin.classList.add('username');
  githubLocation.classList.add('p');
  githubURL.classList.add('p');
  githubFollowers.classList.add('p');
  githubFollowing.classList.add('p');
  githubBio.classList.add('p');
  githubImg.classList.add('img');

  //Set up text content
  githubName.textContent = data.name;
  githubLogin.textContent = data.login;
  githubLocation.textContent = data.location;
  githubURL.textContent = data.html_url;
  githubFollowers.textContent = data.followers;
  githubFollowing.textContent = data.following;
  githubBio.textContent = data.bio;
  githubImg.src = data.avatar_url;

  return card;
} //This closes githubCard

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
