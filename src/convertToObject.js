'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const firstSeparation = sourceString.split(';');

  const secondSeparation = [];

  for (let i = 0; i < firstSeparation.length; i++) {
    const parts = firstSeparation[i].split(':');

    if (parts.length > 1) {
      secondSeparation.push(parts.map((x) => x.trim()));
    }
  }

  const result = {};

  for (let i = 0; i < secondSeparation.length; i++) {
    result[secondSeparation[i][0]] = secondSeparation[i][1];
  }

  return result;
}

module.exports = convertToObject;
