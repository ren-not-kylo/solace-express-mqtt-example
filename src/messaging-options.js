export default {
    host: 'ssl://mr-connection-bcsw6c3mi2o.messaging.solace.cloud:8883',
    username: 'solace-cloud-client',
    password: 'tf8b0c0j0ilfvkbojsatvbjdk6',
    clientId: 'myUniqueClientId',
    keepalive: 10,
    protocolId: 'MQTT',
    protocolVersion: 4,
    clean: true,
    reconnectPeriod: 1000,
    connectTimeout: 10000,
    will: {
        topic: 'WillMsg',
        payload: 'Connection Closed abnormally..!',
        qos: 0,
        retain: false
    },
    rejectUnauthorized: false
};