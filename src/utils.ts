// Contains a hash map of computed multiples
const multipleMap: Record<number, Record<number, boolean>> = {};

export const isMultiple = (inputNumber: number, baseNumber: number) => {
  if (multipleMap?.[inputNumber]?.[baseNumber] === undefined) {
    const isMultipleResult = inputNumber % baseNumber === 0;

    // Null check, create map if doesn't exist
    if (multipleMap[inputNumber] === undefined) {
      multipleMap[inputNumber] = {};
    }

    multipleMap[inputNumber][baseNumber] = isMultipleResult;
  }

  return multipleMap[inputNumber][baseNumber];
};
