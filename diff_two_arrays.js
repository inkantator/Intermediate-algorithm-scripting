function diffArray(arr1, arr2) {

  arr1 = [...new Set(arr1)];
  arr2 = [...new Set(arr2)]

  let difference = arr1.
    filter(x => !arr2.includes(x))
    .concat(arr2.filter(x => !arr1.includes(x)));
  console.log(difference);
  return difference;
}

diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);

//[ 'pink wool', 'diorite' ]

