const url = require('url')
const { http } = require('follow-redirects')

let inputUrl = 'test.com'

if (!/^https?:\/\//i.test(inputUrl)) {
  inputUrl = 'http://' + inputUrl
}

console.log('inputUrl', inputUrl)

const options = url.parse(inputUrl)
options.beforeRedirect = (options, {headers}) => {
  console.log(headers)
}

inputUrl.startsWith('https://') ? https.get(options) : http.get(options)
