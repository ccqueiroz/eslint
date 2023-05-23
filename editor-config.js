const { writeFileSync } = require("node:fs");
const _PATH_FOLDER = ".editorconfig";
const _DEFAULT_CONFIGS_EDITOR_CONFIG = `
root = true

[*]
indent_size = 2
indent_style = space
charset = utf-8
end_of_line = lf
insert_final_newline = false
trim_trailing_whitespace = true
`;

(() => {
  try {
    //creates the .editorconfig file at the root of the project
    writeFileSync(_PATH_FOLDER, _DEFAULT_CONFIGS_EDITOR_CONFIG);
    console.log("Arquivo .editorconfig criado com sucesso.");
  } catch (err) {
    console.error("Erro ao criar o arquivo .editorconfig:", err);
  }
})();
