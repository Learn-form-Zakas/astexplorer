import defaultParserInterface from '../js/utils/defaultESTreeParserInterface';
import pkg from '@wxml/parser/package.json';

const ID = '@wxml/parser';

export default {
  ...defaultParserInterface,

  id: ID,
  displayName: ID,
  version: pkg.version,
  homepage: pkg.homepage || 'https://github.com/wxmlfile/wxml-parser',
  locationProps: new Set(),

  loadParser(callback) {
    require(['@wxml/parser'], callback);
  },

  parse(parser, code, options) {
    return parser.parse(code, options);
  },
};
