const { extend } = require('lodash')
let config = {

}

if(process.env.NODE_ENV === 'development') {
    const devConfig = {
        port: 3001
    }
    config = extend(config, devConfig)
}
if(process.env.NODE_ENV === 'production') {
    const proConfig = {
        port: 80
    }
    config = extend(config, proConfig)
}
module.exports = config