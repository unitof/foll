const url = require('url')
const { http } = require('follow-redirects')

let inputUrl = 'test.com'

if (!/^https?:\/\//i.test(inputUrl)) {
  inputUrl = 'http://' + inputUrl
}

console.log('inputUrl', inputUrl)

const options = url.parse(inputUrl)
options.trackRedirects = true
options.beforeRedirect = (options, {headers}) => {
  console.log(headers)
  console.log(options.statusCode)
}

inputUrl.startsWith('https://') ? https.get(options, response => {handleResponse(response)}) : http.get(options, response => {handleResponse(response)})

function handleResponse(response) {
  response.on('connect', chunk => {
    console.log('connect')
    console.log(chunk)
  })
}
