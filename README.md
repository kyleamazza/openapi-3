[![main](https://github.com/basketry/openapi-3/workflows/build/badge.svg?branch=main&event=push)](https://github.com/basketry/openapi-3/actions?query=workflow%3Abuild+branch%3Amain+event%3Apush)
[![master](https://img.shields.io/npm/v/@basketry/openapi-3)](https://www.npmjs.com/package/@basketry/openapi-3)

# OpenAPI 3.x

[Basketry parser](https://github.com/basketry/basketry) for OpenAPI 3.x service definitions. This parser can be coupled with any Basketry generator to translate a OpenAPI 3.x document into other artifacts including servers, clients, and human-readable documentation.

## Quick Start

The following example converts an OpenAPI doc into Typescript types:

1. Save `https://petstore.swagger.io/v2/swagger.json` as `petstore.json` in the root of your project.
1. Install packages: `npm install -g basketry @basketry/openapi-3 @basketry/typescript`
1. Generate code: `basketry --source petstore.json --parser @basketry/openapi-3 --generators @basketry/typescript --output src`

When the last step is run, basketry will parse the source file (`petstore.json`) using the specified parser (`@basketry/openapi-3`) and then run each specified generator (in this case only `@basketry/typescript`) writing the output folder (`src`).

---

## For contributors:

### Run this project

1.  Install packages: `npm ci`
1.  Build the code: `npm run build`
1.  Run it! `npm start`

Note that the `lint` script is run prior to `build`. Auto-fixable linting or formatting errors may be fixed by running `npm run fix`.

### Create and run tests

1.  Add tests by creating files with the `.test.ts` suffix
1.  Run the tests: `npm t`
1.  Test coverage can be viewed at `/coverage/lcov-report/index.html`

### Publish a new package version

1. Ensure latest code is published on the `main` branch.
1. Create the new version number with `npm version {major|minor|patch}`
1. Push the branch and the version tag: `git push origin main --follow-tags`

The [publish workflow](https://github.com/basketry/openapi-3/actions/workflows/publish.yml) will build and pack the new version then push the package to NPM. Note that publishing requires write access to the `main` branch.

---

Generated with [generator-ts-console](https://www.npmjs.com/package/generator-ts-console)
