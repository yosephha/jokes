export const queryAPI = (query) => {
  const url = "https://api.chucknorris.io/jokes/search?query=" + query
  return (
    $.ajax({
      method: 'GET',
      url: url
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
