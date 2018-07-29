module.exports = {
  baseNamespace: 'app',
  sourceDir: '',
  embed: true,
  skipCoreFiles: true,
  messageType: {
    'app.plugins.message.Payload': {
      extend: 'proto.core.BaseMessage',
      include: ['app.plugins.message.MMessage', 'app.api.MUpdate']
    }
  },
  skipDeps: ['google-protobuf.js', 'grpc-web-client.js'],
  skipDepLoadingFallback: true,
  withoutSemi: true,
  repeatedClass: 'app.api.Array'
}
