const si = require('systeminformation')

export const cpuTemperature =  async function() {
  return si.cpuTemperature();
}

export const graphics = async function() {
  return si.graphics();
}

export default { cpuTemperature }