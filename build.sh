# compile
coffee -c docco.litcoffee;
# install
npm install -g
# run on test files
docco -l linear -o test/fixtures/docs test/fixtures/testSourceFile.js
docco -l linear -o test/fixtures/docs test/fixtures/testSourceFileEndingWithDescription.js