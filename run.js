const Parser = require("tree-sitter")
const JavaScript = require("tree-sitter-javascript")

const program = 'const label = () => ("Chillhop Music")'
const parser = new Parser()
parser.setLanguage(JavaScript)
const parsed = parser.parse(program)

const query = new Parser.Query(JavaScript, `
    (jsx_element
	open_tag: (
	    jsx_opening_element
	    name: (_) @opening-name
	    attribute: (jsx_attribute (property_identifier) @_original "=" (jsx_expression (_) @original))
	    attribute: (jsx_attribute (property_identifier) @_code "=" (string) @code)
	)
	close_tag: (
	    jsx_closing_element
	    name: (_) @closing-name
	    (#eq? @closing-name "Box")
	)

	(#eq? @opening-name "Box")
	(#eq? @_original "original")
	(#eq? @_code "code")
    ) @element
`)
const matches = query.matches(parsed.rootNode)
console.log(matches.length)
