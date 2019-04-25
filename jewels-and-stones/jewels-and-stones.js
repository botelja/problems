/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
const numJewelsInStones = function(J, S) {
  let count = 0;
  const jewels = J.split("");

  for (let i = 0; i < S.length; i++) {
    if (jewels.includes(S[i]) === true) {
      count++;
    }
  }

  return count;
};

console.log(numJewelsInStones("aA", "aAAfjkHkFjdh"), 3);
