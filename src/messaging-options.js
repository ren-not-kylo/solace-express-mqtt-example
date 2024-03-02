export default {
    host: 'wss://mr-connection-3dyjq6jkwhj.messaging.solace.cloud:8443',
    username: 'solace-cloud-client',
    password: '1s5pq12lnp0i97lpajtbk44fpp',
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