let userName: string = "Max";
let userAge: number = 24;
let isValid: boolean = true;
let multiType: string | boolean = true;
let objVariable: {
  stringProp: string;
  booleanProp: boolean;
  numberProp: number;
  multiProp: string | number;
} = {
  stringProp: "val",
  booleanProp: true,
  numberProp: 12,
  multiProp: "string",
};
let arrayVariable: string[] = ["hi", "yes", "no"];
let arrayOfObjects: { numProp: number; boolProp: boolean }[] = [
  { numProp: 1, boolProp: true },
  { numProp: 2, boolProp: false },
];

function voidFunction(paramOne: number, paramTwo: boolean): void {
  const result =
    "The number is: " + paramOne + ", and the boolean is: " + paramTwo;
  console.log(result);
}

function returningFunction(paramOne: number, paramTwo: number): boolean {
  //check if paramOne is greater than paramTwo
  return paramOne > paramTwo;
}

function functionWithCallback(
  paramOne: number,
  paramTwo: number,
  callbackFunction: (paramOne: number, paramTwo: number) => number
) {
  callbackFunction(paramOne, paramTwo);
}
