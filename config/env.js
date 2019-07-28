const webpack = require('webpack');
const dotenv = require('dotenv');

const getEnvs = () => {
  const env = dotenv.config().parsed;

  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    plugins: [new webpack.DefinePlugin(envKeys)]
  };
};

console.log(getEnvs().plugins);

module.exports = getEnvs;
