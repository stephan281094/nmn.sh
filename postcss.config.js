/* eslint-disable @typescript-eslint/no-require-imports */

// const fs = require("fs");
// const path = require("path");

// const projectRoot = __dirname;
// const monorepoRoot = path.join(projectRoot, "../../");

// function getPackageIncludePaths(packageName, nodeModulePaths) {
//   let packagePath = null;

//   for (const nodeModulePath of nodeModulePaths) {
//     const packageJsonPath = path.resolve(
//       nodeModulePath,
//       packageName,
//       "package.json"
//     );
//     if (fs.existsSync(packageJsonPath)) {
//       packagePath = path.dirname(packageJsonPath);
//       break;
//     }
//   }
//   if (!packagePath) {
//     throw new Error(`Could not find package ${packageName}`);
//   }

//   return [
//     path.join(packagePath, "**/*.{js,mjs}"),
//     "!" + path.join(packagePath, "node_modules/**/*.{js,mjs}"),
//   ];
// }

// const openPropsIncludePaths = getPackageIncludePaths("@stylexjs/open-props", [
//   path.join(projectRoot, "node_modules"),
//   path.join(monorepoRoot, "node_modules"),
// ]);

module.exports = {
  plugins: {
    "@stylexjs/postcss-plugin": {
      include: [
        "src/**/*.{js,jsx,ts,tsx}",
        // "components/**/*.{js,jsx,ts,tsx}",
        // ...openPropsIncludePaths,
      ],
      useCSSLayers: true,
    },
    // autoprefixer: {},
  },
};
