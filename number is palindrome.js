<script>
// A recursive javascript program to
// check whether a given number
// is palindrome or not

	// A function that returns true
	// only if num contains one digit
	function oneDigit(num) {

		if ((num >= 0) && (num < 10))
			return 1;
		else
			return 0;
	}

	function isPalUtil
	(num , dupNum) {

		// base condition to return once we
		// move past first digit
		if (num == 0) {
			return dupNum;
		} else {
			dupNum = isPalUtil(parseInt(num / 10), dupNum);
		}

		// Check for equality of first digit of
		// num and dupNum
		if (num % 10 == dupNum % 10) {
			// if first digit values of num and
			// dupNum are equal divide dupNum
			// value by 10 to keep moving in sync
			// with num.
			return parseInt(dupNum / 10);
		} else {
			// At position values are not
			// matching throw exception and exit.
			// no need to proceed further.
			throw e;
		}

	}

	function isPal(num)
	{

		if (num < 0)
			num = (-num);

		var dupNum = (num);

		return isPalUtil(num, dupNum);
	}

	

	var n = 1242;
	try {
		isPal(n);
		document.write("<br>Yes");
	} catch (e) {
		document.write("<br>No");
	}
	n = 1231;
	try {
		isPal(n);
		document.write("<br>Yes");
	} catch (e) {
		document.write("<br>No");
		}

		n = 12;
		try {
			isPal(n);
			document.write("<br>Yes");
	} catch (e) {
		document.write("<br>No");
		}

		n = 88;
		try {
			isPal(n);
			document.write("<br>Yes");
	} catch (e) {
		document.write("<br>No");
		}

		n = 8999;
		try {
			isPal(n);
			document.write("<br>Yes");
	} catch (e) {
		document.write("<br>No");
	}

// This code is contributed by Amit Katiyar
</script>
