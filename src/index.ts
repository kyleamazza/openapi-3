import { Parser } from 'basketry';

import { OAS3Parser } from './parser';

const parser: Parser = (input, sourcePath) => {
  const oas3Parser = new OAS3Parser(input, sourcePath);
  const service = oas3Parser.parse();
  const violations = oas3Parser.violations;
  return { service, violations };
};

export default parser;
