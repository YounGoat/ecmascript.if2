'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    , assert = require("assert")
    /* NPM */
    
    /* in-package */
    , if2 = require("if2")
    ;

describe('if2', () => {
   
    it('false, true', () => {
        assert.equal(true, if2(false, true));
    });

    it('false, 1', () => {
        assert.equal(1, if2(false, 1));
    });

    it('true, false', () => {
        assert.equal(true, if2(true, false));
    });

    it('false, null, undefined, 1', () => {
        assert.equal(1, if2(false, null, undefined, 1));
    });

    it('"", true', () => {
        assert.equal(true, if2("", true));
    });
});