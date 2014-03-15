var docco = require('../../docco.js');

var path = require('path');
var fs = require('fs');
// save the path to the test directory to load fixtures
var fixture_dir = path.join(path.dirname(fs.realpathSync(__filename)), '../') + 'fixtures/';

describe("The 'parse' function" ,function() {
    it("parses multiline comments as descriptions", function() {
        var sourceFile = fs.readFileSync(fixture_dir + "testSourceFile.js").toString();
        var parsedSections = docco.parse("testSourceFile.js", sourceFile);
        expect(parsedSections).toEqual([
            { docsText: '', codeText: '' }, // empty section in the beginning
            {docsText: ' This should be *markdown* parsed\n   and ist should be **multiline**. ',
             codeText: 'var a = 3+7;\nvar square = function(x) { return x*x; };'}
        ]);
    });
    
    it("works when the source ends with a description", function() {
        var sourceFile = fs.readFileSync(fixture_dir + "testSourceFileEndingWithDescription.js").toString();
        var parsedSections = docco.parse("testSourceFileEndingWithDescription.js", sourceFile);
        expect(parsedSections).toEqual([
            { docsText: '', codeText: '' }, // empty section in the beginning
            { docsText: " This should be *markdown* parsed\n   and ist should be **multiline**. ",
              codeText: "var a = 3+7;\nvar square = function(x) { return x*x; };" },
            { docsText: " Isn't this great code ? ", codeText: ''}
        ]);
    });
});