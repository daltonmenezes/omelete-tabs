const newsRender = ({ url, title, category, img }, index = 0) => {
  const canTruncate = 
    title.length >= 75
      ? '...'
      : ''

  document.getElementById('news').innerHTML +=
  `
  <section>
    <a href="${ url }" title="${ title }" tabindex="${ index + 2 }">
    <div class="tag">
      <span>${ category }</span>
      <div class="tag-label tag-label-${ tagLabelHandler(category) }"></div>
    </div>
      <div class="picture">
        <img src="${ img }" alt=""/>
      </div>
      ${ title.slice(0, 74).trim() }${ canTruncate }
    </a> 
  </section>  
  `
}