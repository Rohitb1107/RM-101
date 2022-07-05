let val = null;

function toggler(a, b, c) {
  if (val === null) {
    val = a;
  }

  return function () {
    console.log(val);
    if (val == a) {
      val = b;
    } else if (val == b) {
      val = c;
    }
  };
}

const toggle = toggler(1, 2, 3);

toggle();
// 1
toggle();
// 2
toggle();
// 3
