'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let attemptCount = 0;
  const LIMIT_COUNT = 3;
  const message = 'Bzzz... Error!';

  return (firstNumber) => {
    attemptCount++;

    return (secondNumber) =>
      attemptCount > LIMIT_COUNT && attemptCount % 2 === 0
        ? message
        : firstNumber + secondNumber;
  };
}

module.exports = makeRobotAccountant;
