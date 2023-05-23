const { existsSync, writeFileSync, mkdirSync } = require('node:fs');
const _PATH_FOLDER = './.vscode/settings.json';
const _DEFAULT_CONFIGS_WORKSPACE = {
  'files.autoSave': 'afterDelay',
  'editor.formatOnSave': true,
  'editor.codeActionsOnSave': {
    'source.fixAll.eslint': true,
  },
  'files.exclude': {
    node_modules: true,
  },
  'workbench.settings.editor': 'json',
};

(() => {
  let settings = {};
  let hasExistFile = existsSync(_PATH_FOLDER) ?? false;
  //check has file settings.json inside .vscode folder
  if (existsSync(_PATH_FOLDER)) settings = require(_PATH_FOLDER);
  //include non-existing properties in the file
  for (const key in _DEFAULT_CONFIGS_WORKSPACE) {
    if (settings.hasOwnProperty(key)) {
      if (typeof _DEFAULT_CONFIGS_WORKSPACE[key] !== 'string') {
        for (const keyChild in _DEFAULT_CONFIGS_WORKSPACE[key]) {
          if (!settings[key].hasOwnProperty(keyChild)) {
            settings[key][keyChild] = _DEFAULT_CONFIGS_WORKSPACE[key][keyChild];
          }
        }
      }
    } else {
      settings[key] = _DEFAULT_CONFIGS_WORKSPACE[key];
    }
  }
  try {
    const settingsJSON = JSON.stringify(settings);
    //checks if the .vscode folder created in the root of the project already exists.
    if (!hasExistFile) {
      if (!existsSync(_PATH_FOLDER.replace('/settings.json', ''))) {
        mkdirSync(_PATH_FOLDER.replace('/settings.json', ''));
      }
    }
    writeFileSync(_PATH_FOLDER, settingsJSON);
    console.log('Arquivo settings.json criado com sucesso.');
  } catch (err) {
    console.error('Erro ao criar o arquivo settings.json:', err);
  }
})();
