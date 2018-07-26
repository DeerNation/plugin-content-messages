module.exports = {
    messageType: {
      'proto.dn.model.payload.Message': {
        include: ['app.plugins.message.MMessage', 'app.api.MUpdate']
      }
    },
    skipDeps: ['google-protobuf.js', 'grpc-web-client.js'],
    skipDepLoadingFallback: true,
    withoutSemi: true,
    repeatedClass: 'app.api.Array'
  }
  