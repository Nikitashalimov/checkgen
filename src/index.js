function canIterate(object) {
  if (object == null) {
    return false;
  }
  if (object[Symbol.iterator]) {
    return true;
  }
  return false;
}

canIterate(new Map()); // true
canIterate(new Set()); // true
canIterate(null); // false
canIterate(10); // false
canIterate('Netology'); // true
