const os = require('os');

function getNetworkInfo() {
    const networkInterfaces = os.networkInterfaces();
    const result = {};

    for (let interfaceName in networkInterfaces) {
        result[interfaceName] = networkInterfaces[interfaceName].map((net) => {
            return {
                Familia: net.family,
                Direccion: net.address,
                Interno: net.internal
            };
        });
    }

    return result;
}

module.exports = getNetworkInfo;
