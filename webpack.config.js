const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  // noinspection JSValidateTypes,UnnecessaryLocalVariableJS
  const config = await createExpoWebpackConfigAsync({
    ...env,
    babel: {
      dangerouslyAddModulePathsToTranspile: ['@codler/react-native-keyboard-aware-scroll-view']
    }
  }, argv);
  return config;
};