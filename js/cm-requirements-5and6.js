/**
 * Javascript requirements
 */

/**
 * Initialises the string input
 *
 * @param string input
 * @returns {*} true - if empty string.
 * false - if valid non-empty string.
 * false - if valid numeric and non-string
 * undefined - if null
 * undefined - for any other input
 */
function stringInitializer(string) {
    if (isEmpty(string)) return true;
    if (isValidString(string)) return false;
    if (isNumeric(string)) return false;
    if (isNull(string)) return undefined;
    return undefined;
}

/**
 * Determines if input is an empty string
 *
 * @param string input
 * @returns {boolean} true if input is empty string
 */
function isEmpty(string) {
    const EMPTY_STRING = "";
    return isValidString(string) && string === EMPTY_STRING;
}

/**
 * Determines if input is valid string
 *
 * @param string input
 * @returns {boolean} true if input is of type String
 */
function isValidString(string) {
    return typeof string == 'string' || string instanceof String
}

/**
 * Determines if input is a valid number
 *
 * @param number numeric input
 * @returns {boolean} true if input is of numeric type
 */
function isNumeric(number) {
    return !isNaN(parseFloat(number)) && isFinite(number);
}

/**
 * Determines if input is null
 *
 * @param string - string input
 * @returns {boolean} true if input is null
 */
function isNull(string) {
    return string == null;
}

/**
 * This should take a single argument and return true if the provided string is a prefix of this
 *
 * @param string input of type String.
 * @returns {boolean} true if the provided string is a prefix of this.
 * false - if not a prefix
 * Undefined - undefined for invalid input (non-String inputs .e.g. NaN, null, 0, false
 * true - if input is an Empty String
 */
String.prototype.startsWith = function (string) {
    // initialise input
    var isPrefixString = stringInitializer(string);

    // validate input
    if (isPrefixString === undefined) return isPrefixString;

    // check for prefix
    var thisCurrentIndex = 0;
    var prefixStringLengthFromIndex = string.length - 1;

    while (this[thisCurrentIndex] === string[thisCurrentIndex]) {
        if (thisCurrentIndex === prefixStringLengthFromIndex) {
            isPrefixString = true;
        }
        thisCurrentIndex++;
    }
    return isPrefixString;

};

/**
 * This should take a single argument and return true if the provided string is a suffix of this
 *
 * @param string input of type String.
 * @returns {boolean} true if the provided string is a suffix of this.
 * false - if not a suffix
 * Undefined - undefined for invalid input (non-String inputs .e.g. NaN, null, 0, false
 * true - if input is an Empty String
 */
String.prototype.endsWith = function (string) {
    // initialise input
    var isSuffixString = stringInitializer(string);

    // validate input
    if (isSuffixString === undefined) return isSuffixString;

    // check for suffix
    var stringLength = string.length;
    var suffixStringIndex = stringLength - 1;
    var thisCurrentIndex = this.length - 1;
    var thisCurrentIteratedLength = 1;

    while (this[thisCurrentIndex] === string[suffixStringIndex]) {
        if (thisCurrentIteratedLength === stringLength) {
            isSuffixString = true;
        }
        thisCurrentIndex--;
        suffixStringIndex--;
        thisCurrentIteratedLength++;
    }
    return isSuffixString;
};

/**
 * This method should remove all html/xml tags from  this.
 *
 * @returns {string} this with html/xml tags removed.
 */
String.prototype.stripHtml = function () {
    return this.replace(/(<([^>]+)>)/ig, "");
};
