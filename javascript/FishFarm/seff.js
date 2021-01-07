//Son kullanma tarihlerine gore baliklari siralayiniz. (Son kullanma tarihi yaklasan baliklar once gosterilmelidir)

function addDurationDays(pIndex) {
  let productEntryDate = fishFarm[pIndex].entryDate; // object ===>
  let firstDayOfProduct = productEntryDate.getDate(); // number ===>
  // console.log({ firstDayOfProduct });
  // console.log({ productEntryDate });

  const expirationDate = productEntryDate.setDate(
    firstDayOfProduct + fishFarm[pIndex].durationInDays,
  );
  // console.log({ expirationDate });
  // console.log({ productEntryDate });

  return expirationDate;
}

// console.log(addDurationDays(2));

// let result = [];
// for (let index = 0; index < fishFarm.length; index++) {
//   oneDate = addDurationDays(index);
//   result.push(oneDate);
// }
// console.log(result);

let result = fishFarm.map((product, productIndex) =>
  addDurationDays(productIndex)
);

result.sort((a, b) => a - b);

console.log({ result });

result.forEach((product) => {
  console.log(new Date(product));
});

const newResult = result.map((product) => {
  return new Date(product);
});

console.log(newResult);
