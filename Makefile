SHELL := /bin/bash

test:
	@mocha -R spec test.js

hint:
	@jshint *.js *.json

# UglifyJS v2
min:
	@echo -n ';' > combs.min.js; uglifyjs combs.js -o combs.min.js -c -m;

.PHONY: test hint min 