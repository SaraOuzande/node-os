const getOSInfo = require('./osModule');
const getNetworkInfo = require('./networkModule');

console.log('Información del Sistema Operativo:');
const osInfo = getOSInfo();
for (let key in osInfo) {
    console.log(`${key}: ${osInfo[key]}`);
}

console.log('\nInformación de las Interfaces de Red:');
const networkInfo = getNetworkInfo();
for (let interfaceName in networkInfo) {
    console.log(`Interfaz ${interfaceName}:`);
    networkInfo[interfaceName].forEach((detail) => {
        console.log(`  Familia: ${detail.Familia}`);
        console.log(`  Dirección: ${detail.Direccion}`);
        console.log(`  Interno: ${detail.Interno}`);
    });
}
console.log('Ejecutando systemInfo.js');
