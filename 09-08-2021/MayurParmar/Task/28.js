let a, b, c, discriminant, root1, root2, realPart, imagPart;
a = 10;
b = 20;
c = 10;
discriminant = b * b - 4 * a * c;

// condition for real and different roots
if (discriminant > 0) {
  root1 = (-b + sqrt(discriminant)) / (2 * a);
  root2 = (-b - sqrt(discriminant)) / (2 * a);
  console.log("root1 =" + root1 + " and root2 = " + root2);
}

// condition for real and equal roots
else if (discriminant == 0) {
  root1 = root2 = -b / (2 * a);
  console.log("root1 = root2 = " + root1);
}

// if roots are not real
else {
  realPart = -b / (2 * a);
  imagPart = sqrt(-discriminant) / (2 * a);
  console.log(
    "root1 = " +
      realPart +
      "+ " +
      imagPart +
      "  and root2 = " +
      realPart +
      "-" +
      imagPart
  );
}
