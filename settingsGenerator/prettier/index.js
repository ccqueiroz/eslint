/* eslint-disable no-console */
const { existsSync, writeFileSync, readFileSync } = require('node:fs');
const yaml = require('js-yaml');
const _PATH_FOLDER = `${process.cwd()}/.prettierrc`;
const fileExtensions = ['.yml', '.yaml', '.js', '.json'];
const _DEFAULT_CONFIGS_PRETTIER = {
  printWidth: 80,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'always',
  semi: true,
  endOfLine: 'auto',
};

(() => {
  let settings = {};
  let fileExtension = 99;
  //checks if the file exists and what the .prettierrc file extension
  const configFileExists = fileExtensions.some((extension, index) => {
    fileExtension = fileExtensions[index];
    return existsSync(`${_PATH_FOLDER}${extension}`);
  });

  fileExtension = !configFileExists ? 99 : fileExtension;

  //If the .prettierrc file has the .yml or .yaml extension, the yml is converted to js
  if (
    configFileExists &&
    (fileExtension === fileExtensions[0] || fileExtension === fileExtensions[1])
  ) {
    const fileContent = readFileSync(`${_PATH_FOLDER}${fileExtension}`, 'utf8');
    settings = yaml.load(fileContent);
  }
  //If the .prettierrc file has a .js or .json extension, the values are captured
  if (
    configFileExists &&
    fileExtension !== fileExtensions[0] &&
    fileExtension !== fileExtensions[1]
  ) {
    settings = require(`${_PATH_FOLDER}${fileExtension}`);
  }

  //include non-existing properties in the file
  for (const key in _DEFAULT_CONFIGS_PRETTIER) {
    if (!Object.prototype.hasOwnProperty.call(settings, key))
      settings[key] = _DEFAULT_CONFIGS_PRETTIER[key];
  }

  try {
    //Convert settings to yml extension
    if (
      configFileExists &&
      (fileExtension === fileExtensions[0] ||
        fileExtension === fileExtensions[1])
    ) {
      const prettierYAML = yaml.dump(settings);
      writeFileSync(`${_PATH_FOLDER}${fileExtension}`, prettierYAML);
    } else {
      const prettierConfigs = JSON.stringify(settings, null, 2);
      //Convert settings to JSON or JS and create the file
      if (fileExtension === fileExtensions[3]) {
        writeFileSync(`${_PATH_FOLDER}${fileExtension}`, prettierConfigs);
      } else {
        const prettierJS = `module.exports = ${prettierConfigs}`;
        writeFileSync(`${_PATH_FOLDER}.js`, prettierJS);
      }
    }
    console.log('Arquivo .prettier criado com sucesso.');
  } catch (err) {
    console.error('Erro ao criar o arquivo .prettier:', err);
  }
})();
