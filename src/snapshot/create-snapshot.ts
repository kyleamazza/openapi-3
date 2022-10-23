import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { format } from 'prettier';
import parser from '..';

const examplePath = join(process.cwd(), 'src', 'snapshot', 'example.oas3.json');
const exampleSchema = readFileSync(examplePath).toString('utf8');

const petstorePath = join(
  process.cwd(),
  'src',
  'snapshot',
  'petstore.oas3.json',
);
const petstoreSchema = readFileSync(petstorePath).toString('utf8');

const prettierOptions = JSON.parse(
  readFileSync(join(process.cwd(), '.prettierrc')).toString('utf8'),
);

const exampleResult = parser(exampleSchema, examplePath);
const petstoreResult = parser(petstoreSchema, petstorePath);

const example = exampleResult.service;
const petstore = petstoreResult.service;

for (const violation of exampleResult.violations) console.warn(violation);
for (const violation of petstoreResult.violations) console.warn(violation);

const exampleSnapshot = format(JSON.stringify(example), {
  ...prettierOptions,
  parser: 'json',
});

const petstoreSnapshot = format(JSON.stringify(petstore), {
  ...prettierOptions,
  parser: 'json',
});

writeFileSync(
  join(process.cwd(), 'src', 'snapshot', 'snapshot.json'),
  exampleSnapshot,
);

writeFileSync(
  join(process.cwd(), 'src', 'snapshot', 'petstore.json'),
  petstoreSnapshot,
);
