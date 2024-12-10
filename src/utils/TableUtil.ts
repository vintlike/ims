export function createNewArr<T, K extends keyof T>(data: T[], key: K) {
  return data
    .reduce<Array<T[K]>>((result, item) => {
      const currItem = item[key];
      if (!result.includes(currItem)) {
        result.push(currItem);
      }
      return result;
    }, [])
    .reduce<T[]>((result, value) => {
      const children = data.filter((item) => item[key] === value);
      result = result.concat(
        children.map((item, index) => ({
          ...item,
          rowSpan: index === 0 ? children.length : 0
        }))
      );
      return result;
    }, []);
}

export function createNewArr2<T, K extends keyof T>(data: T[], key: K) {
  const uniqueValueSet = new Set<T[K]>();
  const uniqueValueArray: T[K][] = [];
  data.forEach((currentItem) => {
    const currentKeyValue = currentItem[key];
    if (!uniqueValueSet.has(currentKeyValue)) {
      uniqueValueSet.add(currentKeyValue);
      uniqueValueArray.push(currentKeyValue);
    }
  });

  const mergedDataArray: T[] = [];
  uniqueValueArray.forEach((uniqueKeyValue) => {
    const relatedItems = data.filter((item) => item[key] === uniqueKeyValue);
    const mergedItems = relatedItems.map((item, index) => ({
      ...item,
      rowSpan: index === 0 ? relatedItems.length : 0
    }));
    mergedDataArray.push(...mergedItems);
  });

  return mergedDataArray;
}
