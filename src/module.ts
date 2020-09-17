/**
 * Test utility. To export-import demonstration
 */

type testType = (n: number) => number;

const testFunction: testType = (n) =>
  parseInt(n.toString().split("").reverse().join(""));

export default testFunction;
