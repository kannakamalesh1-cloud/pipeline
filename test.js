// Simple test for GitHub Actions
function sum(a, b) {
  return a + b;
}

// Basic test
if (sum(2, 3) === 5) {
  console.log("Test passed ✅");
  process.exit(0); // success
} else {
  console.error("Test failed ❌");
  process.exit(1); // fail
}
