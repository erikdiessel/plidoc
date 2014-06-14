# compile
#coffee -c docco.litcoffee;
# install globally and locally (for continuos integration)
npm install -g
npm install
# run on test files
docco -l linear -o test/fixtures/docs test/fixtures/testSourceFile.js
docco -l linear -o test/fixtures/docs test/fixtures/testSourceFileEndingWithDescription.js
docco -l linear -o test/fixtures/docs test/fixtures/mathFile.js