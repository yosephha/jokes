export const queryAPI = (query) => {
  return (
    $.ajax({
      method: 'GET',
          url: `https://api.chucknorris.io/jokes/search?query=${query}`
    })
  );
}

export const fetchCategories = () => {
  return (
    $.ajax({
      method: 'GET',
      url: 'https://api.chucknorris.io/jokes/categories'
    })
  );
}
