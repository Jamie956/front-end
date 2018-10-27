"use strict";

//Turn an object into list of [key, value] pairs for mapping, iterating or other purposes.
module.exports = obj => Object.keys(obj).map(key => [key, obj[key]]);
