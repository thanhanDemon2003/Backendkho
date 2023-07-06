// Trong dbConfig.js
const config = {
    server: '222.252.6.94',
    port: 12613,
    user: 'wms_report',
    password: 'Abcd@1234',
    database: 'HPC_WMS',
    options: {
        trustServerCertificate: true
    }
  };
  
  const config1 = {
    server: '222.252.6.94',
    port: 12613,
    user: 'wms_report',
    password: 'Abcd@1234',
    database: 'HPC_MOBILE_WMS',
    options: {
        trustServerCertificate: true
    }
  };
  
  module.exports = {
    config,
    config1
  };
  