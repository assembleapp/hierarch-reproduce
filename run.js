const Parser = require("tree-sitter")
const JavaScript = require("tree-sitter-javascript")

const program = 'const label = () => ("Chillhop Music")'
const parser = new Parser()
parser.setLanguage(JavaScript)
const parsed = parser.parse(program)

const query = new Parser.Query(JavaScript, '(variable_declarator (identifier) @name)')
const matches = query.matches(parsed.rootNode)
console.log(matches.length)
