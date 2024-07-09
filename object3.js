const profile = {
    name: 'Jacques Gluke',
    tag: 'jgluke',
    location: 'Ocho Rios, Jamaica',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
    stats: {
      followers: 5603,
      views: 4827,
      likes: 1308,
    },
  };
  
  const makeProfileMarkup = function (userProfile) {
    const {
      avatar = 'https://i.pravatar.cc/400?img=6',
      name,
      tag,
      location = 'Planet Earth',
      stats: { followers, views, likes },
    } = userProfile;
  
    return `<div>
      <img src="${avatar}" alt="user avatar">
      <p>${name}<span>@${tag}</span></p>
      <p>Location: ${location}</p>
      <ul>
        <li>Followers: ${followers}</li>
        <li>Views: ${views}</li>
        <li>Likes: ${likes}</li>
      </ul>
    </div>`;
  };
  
  const markup = makeProfileMarkup(profile);
  
  console.log(markup);
  
  document.body.insertAdjacentHTML('afterbegin', markup);

  const dirtyMultiply = (array, value) => {
    for (let i = 0; i < array.length; i += 1) {
      array[i] = array[i] * value;
    }
  };
  
  const numbers = [1, 2, 3, 4, 5];
  dirtyMultiply(numbers, 2);
  // Відбулася мутація вихідних даних - масиву numbers
  console.log(numbers); // [2, 4, 6, 8, 10]
  