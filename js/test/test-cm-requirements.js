/**
 * Requirements 5 and 6 tests
 */
describe("Requirement 5: startsWith(string)  ­ This should take a single argument and return true if the provided string is a prefix of  this. " +
    "endsWith(string)  ­ This should take a single argument and return true if the provided string is a suffix of  this .", function () {
    var someString = "hang the dj";
    describe("string prefix", function () {
        var prefixOfSomeString = "";
        it("should be able to find a string prefix", function () {
            expect(someString.startsWith(prefixOfSomeString)).toBeDefined();
        });
    });

    describe("string prefix", function () {
        var prefixOfSomeString = "hang";
        it("'" + prefixOfSomeString + "'" + " should be a prefix of " + "'" + someString + "'", function () {
            expect(someString.startsWith(prefixOfSomeString)).toBe(true);
        });
    });

    describe("string prefix", function () {
        var prefixOfSomeString = "Hang";
        it("'" + prefixOfSomeString + "'" + " should not be a prefix of " + "'" + someString + "'" + " because the prefix first character has a case mismatch", function () {
            expect(someString.startsWith(prefixOfSomeString)).toBeDefined();
        });
    });

    describe("string prefix", function () {
        var prefixOfSomeString = "I've got a room for rent";
        it("'" + prefixOfSomeString + "'" + " should not be a prefix of " + "'" + someString + "'", function () {
            expect(someString.startsWith(prefixOfSomeString)).toBe(false);
        });
    });

    describe("string prefix", function () {
        var prefixOfSomeString = "";
        it("'" + prefixOfSomeString + "'" + " should be a prefix of " + "'" + someString + "'" + " because it is the empty string", function () {
            expect(someString.startsWith(prefixOfSomeString)).toBe(true);
        });
    });

    describe("string prefix", function () {
        var prefixOfSomeString = "hang the";
        it("'" + prefixOfSomeString + "'" + " should be a prefix of " + "'" + someString + "'", function () {
            expect(someString.startsWith(prefixOfSomeString)).toBe(true);
        });
    });

    describe("string prefix", function () {
        var prefixOfSomeString = "han";
        it("'" + prefixOfSomeString + "'" + " should be a prefix of " + "'" + someString + "'", function () {
            expect(someString.startsWith(prefixOfSomeString)).toBe(true);
        });
    });

    describe("string prefix", function () {
        var prefixOfSomeString = "hang t";
        it("'" + prefixOfSomeString + "'" + " should be a prefix of " + "'" + someString + "'", function () {
            expect(someString.startsWith(prefixOfSomeString)).toBe(true);
        });
    });

    describe("string prefix", function () {
        var prefixOfSomeString = "42";
        it("'" + prefixOfSomeString + "'" + " should not be a prefix of " + "'" + someString + "'", function () {
            expect(someString.startsWith(prefixOfSomeString)).toBe(false);
        });
    });

    describe("string prefix", function () {
        var prefixOfSomeString = "{ first: “Johnny” }";
        it("'" + prefixOfSomeString + "'" + " should not be a prefix of " + "'" + someString + "'", function () {
            expect(someString.startsWith(prefixOfSomeString)).toBe(false);
        });
    });

    describe("string prefix", function () {
        var prefixOfSomeString = "hang the dj";
        it("'" + prefixOfSomeString + "'" + " should be a prefix of " + "'" + someString + "'", function () {
            expect(someString.startsWith(prefixOfSomeString)).toBe(true);
        });
    });

    describe("string prefix", function () {
        var prefixOfSomeString = "hang the dj fsfgdsf";
        it("'" + prefixOfSomeString + "'" + " should not be a prefix of " + "'" + someString + "'", function () {
            expect(someString.startsWith(prefixOfSomeString)).toBe(false);
        });
    });

    describe("string prefix", function () {
        var prefixOfSomeString = "hang the dj fsfgdsf";
        it("'" + prefixOfSomeString + "'" + " length cannot exceed length of " + "'" + someString + "'", function () {
            expect(someString.length > prefixOfSomeString.length).toBe(false);
        });
    });

    // prefix string error case

    describe("string prefix", function () {
        var prefixOfSomeString = null;
        it("'" + prefixOfSomeString + "'" + " is a falsy input", function () {
            expect(someString.startsWith(prefixOfSomeString)).toBeFalsy(true);
        });
    });

    describe("string prefix", function () {
        var prefixOfSomeString = 0;
        it("'" + prefixOfSomeString + "'" + " is a falsy input", function () {
            expect(someString.startsWith(prefixOfSomeString)).toBeFalsy(true);
        });
    });

    describe("string prefix", function () {
        var prefixOfSomeString = undefined;
        it("'" + prefixOfSomeString + "'" + " is a falsy input", function () {
            expect(someString.startsWith(prefixOfSomeString)).toBeFalsy(true);
        });
    });

    describe("string prefix", function () {
        var prefixOfSomeString = NaN;
        it("'" + prefixOfSomeString + "'" + " is a falsy input", function () {
            expect(someString.startsWith(prefixOfSomeString)).toBeFalsy(true);
        });
    });

    describe("string prefix", function () {
        var prefixOfSomeString = 198;
        it("'" + prefixOfSomeString + "'" + " is a falsy input", function () {
            expect(someString.startsWith(prefixOfSomeString)).toBeFalsy(true);
        });
    });

    describe("string prefix", function () {
        var prefixOfSomeString = false;
        it("'" + prefixOfSomeString + "'" + " is a falsy input", function () {
            expect(someString.startsWith(prefixOfSomeString)).toBeFalsy(true);
        });
    });


    // suffix string
    describe("string suffix", function () {
        var suffixOfSomeString = "";
        it("should be able to find a string suffix", function () {
            expect(someString.endsWith(suffixOfSomeString)).toBeDefined();
        });
    });

    describe("string suffix", function () {
        var suffixOfSomeString = "dj";
        it("'" + suffixOfSomeString + "'" + " should be a suffix of " + "'" + someString + "'", function () {
            expect(someString.endsWith(suffixOfSomeString)).toBe(true);
        });
    });

    describe("string suffix", function () {
        var suffixOfSomeString = "panic on the streets";
        it("'" + suffixOfSomeString + "'" + " should not be a suffix of " + "'" + someString + "'" + " because the suffix first character has a case mismatch", function () {
            expect(someString.endsWith(suffixOfSomeString)).toBeDefined();
        });
    });

    describe("string suffix", function () {
        var suffixOfSomeString = "";
        it("'" + suffixOfSomeString + "'" + " should not be a suffix of " + "'" + someString + "'", function () {
            expect(someString.endsWith(suffixOfSomeString)).toBe(true);
        });
    });

    describe("string suffix", function () {
        var suffixOfSomeString = "the dj";
        it("'" + suffixOfSomeString + "'" + " should not be a suffix of " + "'" + someString + "'" + " because it is the empty string", function () {
            expect(someString.endsWith(suffixOfSomeString)).toBe(true);
        });
    });

    describe("string suffix", function () {
        var suffixOfSomeString = "e dj";
        it("'" + suffixOfSomeString + "'" + " should be a suffix of " + "'" + someString + "'", function () {
            expect(someString.endsWith(suffixOfSomeString)).toBe(true);
        });
    });

    describe("string suffix", function () {
        var suffixOfSomeString = "j";
        it("'" + suffixOfSomeString + "'" + " should be a suffix of " + "'" + someString + "'", function () {
            expect(someString.endsWith(suffixOfSomeString)).toBe(true);
        });
    });

    describe("string suffix", function () {
        var suffixOfSomeString = "42";
        it("'" + suffixOfSomeString + "'" + " should not be a suffix of " + "'" + someString + "'", function () {
            expect(someString.endsWith(suffixOfSomeString)).toBe(false);
        });
    });

    describe("string suffix", function () {
        var suffixOfSomeString = "{ first: “Johnny” }";
        it("'" + suffixOfSomeString + "'" + " should not be a suffix of " + "'" + someString + "'", function () {
            expect(someString.endsWith(suffixOfSomeString)).toBe(false);
        });
    });

    describe("string suffix", function () {
        var suffixOfSomeString = "hang the dj";
        it("'" + suffixOfSomeString + "'" + " should be a suffix of " + "'" + someString + "'" + " because it is the empty string", function () {
            expect(someString.endsWith(suffixOfSomeString)).toBe(true);
        });
    });

    describe("string suffix", function () {
        var suffixOfSomeString = "EXTRA hang the dj";
        it("'" + suffixOfSomeString + "'" + " should not be a suffix of " + "'" + someString + "'" + " because it is longer than string", function () {
            expect(someString.endsWith(suffixOfSomeString)).toBe(false);
        });
    });

    describe("string suffix", function () {
        var suffixOfSomeString = "EXTRA hang the dj";
        it("'" + suffixOfSomeString + "'" + "  length cannot exceed length of " + "'" + someString + "'", function () {
            expect(someString.length > suffixOfSomeString.length).toBe(false);
        });
    });

    // suffix string error case
    describe("string suffix", function () {
        var suffixOfSomeString = null;
        it("'" + suffixOfSomeString + "'" + " is a falsy input", function () {
            expect(someString.endsWith(suffixOfSomeString)).toBeFalsy(true);
        });
    });

    describe("string suffix", function () {
        var suffixOfSomeString = 0;
        it("'" + suffixOfSomeString + "'" + " is a falsy input", function () {
            expect(someString.endsWith(suffixOfSomeString)).toBeFalsy(true);
        });
    });

    describe("string suffix", function () {
        var suffixOfSomeString = undefined;
        it("'" + suffixOfSomeString + "'" + " is a falsy input", function () {
            expect(someString.endsWith(suffixOfSomeString)).toBeFalsy(true);
        });
    });

    describe("string suffix", function () {
        var suffixOfSomeString = NaN;
        it("'" + suffixOfSomeString + "'" + " is a falsy input", function () {
            expect(someString.endsWith(suffixOfSomeString)).toBeFalsy(true);
        });
    });

    describe("string suffix", function () {
        var suffixOfSomeString = 198;
        it("'" + suffixOfSomeString + "'" + " is a falsy input", function () {
            expect(someString.endsWith(suffixOfSomeString)).toBeFalsy(true);
        });
    });

    describe("string suffix", function () {
        var suffixOfSomeString = false;
        it("'" + suffixOfSomeString + "'" + " is a falsy input", function () {
            expect(someString.endsWith(suffixOfSomeString)).toBeFalsy(true);
        });
    });

    describe("string suffix", function () {
        var suffixOfSomeString = 42;
        it("'" + suffixOfSomeString + "'" + " should not be a suffix of " + "'" + someString + "'", function () {
            expect(someString.endsWith(suffixOfSomeString)).toBe(false);
        });
    });
});


describe("Requirement 6: stripHtml()  ­ This method should remove all html/xml tags from  this .", function () {

    describe("strip html", function () {
        var someHtml = "";
        var expected = someHtml.stripHtml();
        it("should be able to strip html", function () {
            expect(expected).toBeDefined();
        });
    });

    describe("strip html", function () {
        var someHtml = "<p>Shoplifters of the World <em>Unite</em>!</p>";
        var expected = someHtml.stripHtml();
        it("'" + someHtml + "'" + " after stripping html is " + "'" + expected + "'", function () {
            expect(expected).toEqual("Shoplifters of the World Unite!");
        });
    });

    describe("strip html", function () {
        var someHtml = "<em>1 &lt; 2</em>";
        var expected = someHtml.stripHtml();
        it("'" + someHtml + "'" + " after stripping html is " + "'" + expected + "'", function () {
            expect(expected).toEqual("1 &lt; 2");
        });
    });
});
