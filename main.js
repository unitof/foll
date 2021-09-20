const url = require('url')
const { http } = require('follow-redirects')

const testURL = 'http://test.com'

const options = url.parse(testURL)
options.beforeRedirect = (options, {headers}) => {
  console.log(options)
}

http.request(options)
