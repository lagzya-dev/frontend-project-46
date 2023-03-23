install:
	npm ci
lint:
	npx eslint .
test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

lint:
	npx eslint .

publish:
	npm publish --dry-run


run:
	node bin/gendiff.js

.PHONY: test