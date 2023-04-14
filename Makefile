install:
	npm ci
test:
	npm test
test-coverage:
	npm test -- --coverage --coverageProvider=v8
gendiff:
	bin/gendiff.js
lint:
	npx eslint .
run:
	./bin/gendiff.js file1.yml file2.yml 
run2:
	./bin/gendiff.js file1.json 'file2.json' 

.PHONY: test