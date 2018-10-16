/**
 * create Notification from message
 *
 * @author Tobias Bräutigam <tbraeutigam@gmail.com>
 * @since 2018
 */
const showdown = require('showdown')
showdown.setFlavor('github')
const converter = new showdown.Converter()
const striptags = require('striptags')

const createNotification = (message) => {
  let htmlContent = converter.makeHtml(message.content)
  let res = {
    phrase: 'New message in %s',
    content: striptags(htmlContent),
    image: null
  }
  const match = /<img src="([^"]+)"/.exec(htmlContent)
  if (match) {
    res.image = match[1]
  }
  return res
}

module.exports = createNotification
