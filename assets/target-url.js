var targetUrl = 'https://www.fruitmail.net'
var iframes = document.getElementsByClassName('frame')
for (let i = 0; i < iframes.length; i++) {
  iframes[i].src = targetUrl
}
