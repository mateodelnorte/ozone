test:
	DEBUG= ./node_modules/.bin/mocha -R spec -t 5000

test-debug:
	DEBUG=ozone ./node_modules/.bin/mocha -R spec -t 5000

.PHONY: test
