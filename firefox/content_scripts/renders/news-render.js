const newsRender = ({ url, title, category, img }, index = 0) => {
  const canTruncate = 
    title.length >= 75
      ? '...'
      : ''
  
  article = document.getElementById('news')
  section = document.createElement('section')

  a = document.createElement('a')
  a.setAttribute('href', url)
  a.setAttribute('title', title)
  a.setAttribute('tabindex', index + 2)
  
  divTag = document.createElement('div')
  divTag.setAttribute('class', 'tag')
  
  spanTag = document.createElement('span')
  spanTag.textContent = category
  
  divLabelTag = document.createElement('div')
  divLabelTag.setAttribute('class', `tag-label tag-label-${ tagLabelHandler(category) }`)

  divPicture = document.createElement('div')
  divPicture.setAttribute('class', 'picture')
  
  imgPicture = document.createElement('img')
  imgPicture.setAttribute('src', img)
  imgPicture.setAttribute('alt', '')

  article.appendChild(section)
  section.appendChild(a)
  a.appendChild(divTag)
  divTag.appendChild(spanTag)
  divTag.appendChild(divLabelTag)
  a.appendChild(divPicture)
  divPicture.appendChild(imgPicture)
  
  span = document.createElement('span')
  span.textContent = title.slice(0, 74).trim() + canTruncate
  a.appendChild(span)
}