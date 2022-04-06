// program to split array into smaller chunks

function splitIntoChunk(arr, chunk) {
  let chunks = [];
  while (arr.length > 0) {
    let tempArray;
    tempArray = arr.splice(0, chunk);
    chunks.push(tempArray);
  }

  return chunks;
}
