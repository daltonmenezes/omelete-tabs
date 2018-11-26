const fetchNews = ({ endpoint, configs }) => {
  fetch(endpoint, configs)
  .then(response => response.json())
  .then(data => data.reduce((acc, value)=> acc += value.body, ''))
  .then(html => {
   const parse = new window.DOMParser().parseFromString(html, 'text/html')
   
   const img = 
      Array
      .from(parse.querySelectorAll('img'))
      .map(img => img.src.replace('chrome-extension://', 'https://'))

    const title = 
      Array
      .from(parse.querySelectorAll('h2'))
      .map(title => title.textContent)

    const url = 
      Array
      .from(parse.querySelectorAll('a'))
      .map(a => a.href.replace('chrome-extension://', 'https://omelete.com.br/'))
        
    const category = 
      Array
      .from(parse.querySelectorAll('p'))
      .map(category => category.textContent)
    
    const response = title.map((v, i) => 
      Object.assign({
        [i]: {
          img: img[i], 
          title: title[i], 
          url: url[i],
          category: category[i]
        }
      })
    )

    return response
  })
  .then(response => response.map((news, i) => newsRender(news[i], i)))
  .then(() => document.getElementById('loading').remove())
  .catch(err => fetchNews({ endpoint, configs }))
}

fetchNews(apiConfig)

