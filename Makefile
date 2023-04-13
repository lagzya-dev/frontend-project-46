install:
	npm ci
test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

lint:
	npx eslint .

publish:
	npm publish --dry-run
run:
	./bin/gendiff.js file1.yml file2.yml 

run2:
	./bin/gendiff.js file1.json 'file2.json' 

.PHONY: test