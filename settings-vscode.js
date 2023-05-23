const settingsVscode = {
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

module.exports = JSON.stringify(settingsVscode);
