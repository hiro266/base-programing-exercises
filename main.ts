const main = (s: string, t: string): boolean => {
  const map = new Map();
  const leftSplit = s.split("");
  const rightSplit = t.split("");

  for (let i = 0; i < leftSplit.length; i++) {
    if (
      (map.has(leftSplit[i]) && map.get(leftSplit[i]) !== rightSplit[i]) ||
      (map.has(rightSplit[i]) && map.get(rightSplit[i]) !== leftSplit[i])
    ) {
      console.log("false");
      return false;
    }

    console.log("set前map:", map);
    map.set(leftSplit[i], rightSplit[i]);
    console.log("set後map:", map);
    console.log("----------------");
  }
  console.log("true");
  return true;
};

// main("egg", "add");
// main("foo", "bar");
main("paper", "title");
// main("badc", "baba");
