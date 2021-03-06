
/**
 * A Message is the basic activity content type: a simple message that can contain
 * anything encoded in a markdown notation.
 * Payload class generated from protobuf definition "backend/payload.proto".
 * auto-generated code PLEASE DO NOT EDIT!
 * 
 */
qx.Class.define('app.plugins.message.Payload', {
  extend: proto.core.BaseMessage,
  include: [app.plugins.message.MMessage, app.api.MUpdate],

  /*
  *****************************************************************************
     STATICS
  *****************************************************************************
  */
  statics: {
    /**
     * Serializes the given message to binary data (in protobuf wire
     * format), writing to the given BinaryWriter.
     * @param message {proto.core.BaseMessage}
     * @param writer {jspb.BinaryWriter}
     */
    serializeBinaryToWriter: function (message, writer) {
      var f = message.getUid()
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        )
      }
      f = message.getContent()
      if (f.length > 0) {
        writer.writeString(
          2,
          f
        )
      }
      f = message.getLink()
      if (f.length > 0) {
        writer.writeString(
          3,
          f
        )
      }
    },

    /**
     * Deserializes binary data (in protobuf wire format).
     * @param bytes {jspb.ByteSource} The bytes to deserialize.
     * @return {app.plugins.message.Payload}
     */
    deserializeBinary: function (bytes) {
      var reader = new jspb.BinaryReader(bytes)
      var msg = new app.plugins.message.Payload()
      return app.plugins.message.Payload.deserializeBinaryFromReader(msg, reader)
    },

    /**
     * Deserializes binary data (in protobuf wire format) from the
     * given reader into the given message object.
     * @param msg {app.plugins.message.Payload} The message object to deserialize into.
     * @param reader {jspb.BinaryReader} The BinaryReader to use.
     * @return {app.plugins.message.Payload}
     */
    deserializeBinaryFromReader: function (msg, reader) {
      msg.setDeserialized(true)
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break
        }
        var value
        var field = reader.getFieldNumber()
        switch (field) {
          case 1:
            value = reader.readString()
            msg.setUid(value)
            break
          case 2:
            value = reader.readString()
            msg.setContent(value)
            break
          case 3:
            value = reader.readString()
            msg.setLink(value)
            break
          default:
            reader.skipField()
            break
        }
      }
      return msg
    }
  },

  /*
  *****************************************************************************
     PROPERTIES
  *****************************************************************************
  */
  properties: {

    uid: {
      check: 'String',
      init: '',
      nullable: false,
      event: 'changeUid'
    },

    content: {
      check: 'String',
      init: '',
      nullable: false,
      event: 'changeContent'
    },

    link: {
      check: 'String',
      init: '',
      nullable: false,
      event: 'changeLink'
    }
  }
})
