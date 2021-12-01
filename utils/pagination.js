module.exports = paginateResults = (results, start, count) => {
  const startIndex = start;
  const endIndex = start + count;
  return results.slice(startIndex, endIndex);
};
