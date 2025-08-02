const createWordPyramid = () => {
  let word = "code";
  let pyramid = "";
  lengthOfWord = word.length;
  let i = 0;
  while (i < lengthOfWord) {
    pyramid = pyramid + word[i];
    i++;
    console.log(pyramid);
  }
};
createWordPyramid();
