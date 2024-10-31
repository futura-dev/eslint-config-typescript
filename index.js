/* eslint-disable @typescript-eslint/no-require-imports */
const eslintrc = require("./eslint.config.js");

const mergePrettierEslintConfigs = (configs = [], rules = {}) => {
  const mergedPrettierRules = {};
  for (const config of configs) {
    if (config["rules"]?.["prettier/prettier"]) {
      const currentRules = config["rules"]["prettier/prettier"][1] || null;
      Object.assign(mergedPrettierRules, currentRules || {});
    }
  }

  return {
    "prettier/prettier": ["error", { ...mergedPrettierRules, rules }],
  };
};

module.exports = { config: eslintrc, utils: { mergePrettierEslintConfigs } };
