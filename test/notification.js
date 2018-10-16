/* eslint-env mocha */

const expect = require('chai').expect
const createNotification = require('../backend/Notification')

describe('Notification', function () {
  it('should extract an image from markdown code and extract the text from the message', async function () {
    var res = createNotification({
      content: '**[Headline](https://www.wikipedia.org)**\n\nThis is the message body<p><img src="https://via.placeholder.com/350x150" width="350" height="150" alt="Example image"/></p>'
    })
    expect(res.image).to.equal('https://via.placeholder.com/350x150')
    expect(res.content).to.equal('Headline\nThis is the message body')
  })
})
