/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_logging_type_log_severity_pb = require('../../../../google/logging/type/log_severity_pb.js');
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.exportSymbol('proto.google.api.servicecontrol.v1.LogEntry', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.api.servicecontrol.v1.LogEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.api.servicecontrol.v1.LogEntry.oneofGroups_);
};
goog.inherits(proto.google.api.servicecontrol.v1.LogEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.api.servicecontrol.v1.LogEntry.displayName = 'proto.google.api.servicecontrol.v1.LogEntry';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.api.servicecontrol.v1.LogEntry.oneofGroups_ = [[2,3,6]];

/**
 * @enum {number}
 */
proto.google.api.servicecontrol.v1.LogEntry.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  PROTO_PAYLOAD: 2,
  TEXT_PAYLOAD: 3,
  STRUCT_PAYLOAD: 6
};

/**
 * @return {proto.google.api.servicecontrol.v1.LogEntry.PayloadCase}
 */
proto.google.api.servicecontrol.v1.LogEntry.prototype.getPayloadCase = function() {
  return /** @type {proto.google.api.servicecontrol.v1.LogEntry.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.google.api.servicecontrol.v1.LogEntry.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.api.servicecontrol.v1.LogEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.google.api.servicecontrol.v1.LogEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.api.servicecontrol.v1.LogEntry} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.api.servicecontrol.v1.LogEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 10, ""),
    timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    severity: jspb.Message.getFieldWithDefault(msg, 12, 0),
    insertId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : [],
    protoPayload: (f = msg.getProtoPayload()) && google_protobuf_any_pb.Any.toObject(includeInstance, f),
    textPayload: jspb.Message.getFieldWithDefault(msg, 3, ""),
    structPayload: (f = msg.getStructPayload()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.api.servicecontrol.v1.LogEntry}
 */
proto.google.api.servicecontrol.v1.LogEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.api.servicecontrol.v1.LogEntry;
  return proto.google.api.servicecontrol.v1.LogEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.api.servicecontrol.v1.LogEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.api.servicecontrol.v1.LogEntry}
 */
proto.google.api.servicecontrol.v1.LogEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 11:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    case 12:
      var value = /** @type {!proto.google.logging.type.LogSeverity} */ (reader.readEnum());
      msg.setSeverity(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setInsertId(value);
      break;
    case 13:
      var value = msg.getLabelsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString);
         });
      break;
    case 2:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.setProtoPayload(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTextPayload(value);
      break;
    case 6:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setStructPayload(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.api.servicecontrol.v1.LogEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.api.servicecontrol.v1.LogEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.api.servicecontrol.v1.LogEntry} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.api.servicecontrol.v1.LogEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getSeverity();
  if (f !== 0.0) {
    writer.writeEnum(
      12,
      f
    );
  }
  f = message.getInsertId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getLabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(13, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getProtoPayload();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getStructPayload();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 10;
 * @return {string}
 */
proto.google.api.servicecontrol.v1.LogEntry.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/** @param {string} value */
proto.google.api.servicecontrol.v1.LogEntry.prototype.setName = function(value) {
  jspb.Message.setField(this, 10, value);
};


/**
 * optional google.protobuf.Timestamp timestamp = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.api.servicecontrol.v1.LogEntry.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.google.api.servicecontrol.v1.LogEntry.prototype.setTimestamp = function(value) {
  jspb.Message.setWrapperField(this, 11, value);
};


proto.google.api.servicecontrol.v1.LogEntry.prototype.clearTimestamp = function() {
  this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.api.servicecontrol.v1.LogEntry.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional google.logging.type.LogSeverity severity = 12;
 * @return {!proto.google.logging.type.LogSeverity}
 */
proto.google.api.servicecontrol.v1.LogEntry.prototype.getSeverity = function() {
  return /** @type {!proto.google.logging.type.LogSeverity} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/** @param {!proto.google.logging.type.LogSeverity} value */
proto.google.api.servicecontrol.v1.LogEntry.prototype.setSeverity = function(value) {
  jspb.Message.setField(this, 12, value);
};


/**
 * optional string insert_id = 4;
 * @return {string}
 */
proto.google.api.servicecontrol.v1.LogEntry.prototype.getInsertId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.google.api.servicecontrol.v1.LogEntry.prototype.setInsertId = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * map<string, string> labels = 13;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.google.api.servicecontrol.v1.LogEntry.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 13, opt_noLazyCreate,
      null));
};


proto.google.api.servicecontrol.v1.LogEntry.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
};


/**
 * optional google.protobuf.Any proto_payload = 2;
 * @return {?proto.google.protobuf.Any}
 */
proto.google.api.servicecontrol.v1.LogEntry.prototype.getProtoPayload = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 2));
};


/** @param {?proto.google.protobuf.Any|undefined} value */
proto.google.api.servicecontrol.v1.LogEntry.prototype.setProtoPayload = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.google.api.servicecontrol.v1.LogEntry.oneofGroups_[0], value);
};


proto.google.api.servicecontrol.v1.LogEntry.prototype.clearProtoPayload = function() {
  this.setProtoPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.api.servicecontrol.v1.LogEntry.prototype.hasProtoPayload = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string text_payload = 3;
 * @return {string}
 */
proto.google.api.servicecontrol.v1.LogEntry.prototype.getTextPayload = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.api.servicecontrol.v1.LogEntry.prototype.setTextPayload = function(value) {
  jspb.Message.setOneofField(this, 3, proto.google.api.servicecontrol.v1.LogEntry.oneofGroups_[0], value);
};


proto.google.api.servicecontrol.v1.LogEntry.prototype.clearTextPayload = function() {
  jspb.Message.setOneofField(this, 3, proto.google.api.servicecontrol.v1.LogEntry.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.api.servicecontrol.v1.LogEntry.prototype.hasTextPayload = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Struct struct_payload = 6;
 * @return {?proto.google.protobuf.Struct}
 */
proto.google.api.servicecontrol.v1.LogEntry.prototype.getStructPayload = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 6));
};


/** @param {?proto.google.protobuf.Struct|undefined} value */
proto.google.api.servicecontrol.v1.LogEntry.prototype.setStructPayload = function(value) {
  jspb.Message.setOneofWrapperField(this, 6, proto.google.api.servicecontrol.v1.LogEntry.oneofGroups_[0], value);
};


proto.google.api.servicecontrol.v1.LogEntry.prototype.clearStructPayload = function() {
  this.setStructPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.api.servicecontrol.v1.LogEntry.prototype.hasStructPayload = function() {
  return jspb.Message.getField(this, 6) != null;
};


goog.object.extend(exports, proto.google.api.servicecontrol.v1);
