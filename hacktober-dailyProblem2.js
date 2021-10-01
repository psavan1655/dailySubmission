<script>
	// JavaScript Program to find the subarray with
	// no pair sum divisible by K
	// function to find the subarray with
	// no pair sum divisible by k
	function subarrayDivisibleByK(arr, n, k) {
		// hash table to store the remainders
		// obtained on dividing by K
		var mp = new Array(1000).fill(0);

		// s : starting index of the
		// current subarray, e : ending
		// index of the current subarray, maxs :
		// starting index of the maximum
		// size subarray so far, maxe : ending
		// index of the maximum size subarray
		// so far
		var s = 0,
		e = 0,
		maxs = 0,
		maxe = 0;

		// insert the first element in the set
		mp[arr[0] % k]++;

		for (var i = 1; i < n; i++) {
		var mod = arr[i] % k;

		// Removing starting elements of current
		// subarray while there is an element in
		// set which makes a pair with mod[i] such
		// that the pair sum is divisible.
		while (mp[k - mod] != 0 || (mod == 0 && mp[mod] != 0)) {
			mp[arr[s] % k]--;
			s++;
		}

		// include the current element in
		// the current subarray the ending
		// index of the current subarray
		// increments by one
		mp[mod]++;
		e++;

		// compare the size of the current
		// subarray with the maximum size so
		// far
		if (e - s > maxe - maxs) {
			maxe = e;
			maxs = s;
		}
		}

		document.write(
		"The maximum size is " +
			(maxe - maxs + 1) +
			" and the subarray is as follows<br>"
		);

		for (var i = maxs; i <= maxe; i++) document.write(arr[i] + " ");
	}

	// Driver Code
	var k = 3;
	var arr = [5, 10, 15, 20, 25];
	var n = arr.length;
	subarrayDivisibleByK(arr, n, k);
	
	</script>
