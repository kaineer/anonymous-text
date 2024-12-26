interface StringableFunctionResult {
  (modifier: string, value?: string): string;
  toString: () => string;
}

export const bem = (block: string, element?: string): StringableFunctionResult => {
  const elementValue = block + (element ? "__" + element : "");

  const bemFn = (modifier: string, value?: string): string => {
    return elementValue + "--" + (
      modifier + (value ? "_" + value : "")
    );
  }

  bemFn.toString = () => elementValue;

  return bemFn;
}

