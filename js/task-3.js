function checkForSpam(message) {
  const spamWords1 = 'spam';
  const spamWords2 = 'sale';
  const messageLowerCase = message.toLowerCase();
  if (
    messageLowerCase.includes(spamWords1) ||
    messageLowerCase.includes(spamWords2)
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('Amazing SalE, only tonight!')); // true
console.log(checkForSpam('Trust me, this is not a spam message')); // true
console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
