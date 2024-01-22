type StringOrBool = string | boolean;
type CallbackFunctionType = (paramOne: number, paramTwo: number) => number;
type ObjectType = {
  stringProp: string;
  booleanProp: boolean;
  numberProp: number;
  multiProp: string | number;
};
type ArrayOfObjectType = { numProp: number; boolProp: boolean }[];

let userName: string = "Max";
let userAge: number = 24;
let isValid: boolean = true;
let multiType: StringOrBool = true;

let objVariable: ObjectType = {
  stringProp: "val",
  booleanProp: true,
  numberProp: 12,
  multiProp: "string",
};

let arrayVariable: string[] = ["hi", "yes", "no"];
let arrayOfObjects: ArrayOfObjectType = [
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
  callbackFunction: CallbackFunctionType
) {
  callbackFunction(paramOne, paramTwo);
}

interface AuthObjectType {
  authKey: string;
  authID: number;
}

let authObject: AuthObjectType;

authObject = {
  authKey: "24iy0uhn3408yAWEN44susamongus",
  authID: 1337,
};

interface InterfaceType {
  propOne: number;
  propTwo: number;
}

class IncludesInterfaceType implements InterfaceType {
  propOne: number;
  propTwo: number;
  propThree: boolean;
}

function useInterfaceType(val: InterfaceType) {
  return val.propOne + val.propTwo;
}

useInterfaceType(new IncludesInterfaceType());

//IncludesInterfaceType implements InterfaceType and thus must have at least propOne and PropTwo
//Because of this, you can call useInterfaceType, which takes InterfaceType, with an IncludesInterfaceType object since IncludesInterfaceType implements InterfaceType and therefore is guaranteed to include the basic props of InterfaceType

interface ExtendableInterfaceType {
  propOne: number;
  propTwo: number;
}

interface ExtendableInterfaceType {
  propThree: boolean;
}

//since interfaces are extendable, you can call it again and redefine it. However this is usually not necessary

type TypeA = {
  propOne: number;
  propTwo: number;
};

type TypeB = {
  propThree: boolean;
};

type TypeAB = TypeA & TypeB;

let abVal: TypeAB;

abVal = {
  propOne: 1,
  propTwo: 2,
  propThree: false,
};

//since TypeAB is the merge of TypeA and TypeB, any TypeAB such as abVal should have propOne and propTwo as well as propThree

interface InterfaceTypeA {
  propOne: number;
  propTwo: number;
}

interface InterfaceTypeB {
  propThree: boolean;
}

interface InterfaceTypeAB extends InterfaceTypeA, InterfaceTypeB {}

let abValInterface: InterfaceTypeAB;

abValInterface = {
  propOne: 1,
  propTwo: 2,
  propThree: false,
};

//extending an interface is similar to merging a type but you use interface extends rather than the & operator

type ThreeOptions = "option1" | "option2" | "option3";

let stringLiteral: ThreeOptions; //Can only be these three

stringLiteral = "option1";
stringLiteral = "option2";
stringLiteral = "option3";

//Since we defined only three strings as the type of stringLiteral, any other will throw an error

function typeGuardedFunction(username: string) {
  if (typeof username === "string") {
    //do something
  }
}

type OperateWithUnknowns<T, U> = {
  unknownOne: T[];
  unknownTwo: U[];
  operate: (unknownOne: T, unknownTwo: U) => void;
};

let OperateWithStringAndBoolean: OperateWithUnknowns<string, boolean> = {
  unknownOne: [],
  unknownTwo: [],
  operate(unknownOne, unknownTwo) {
    //do something
  },
};

//T and U are not known in the initial type definition, so you input it as string and boolean in the type definition

function arrayify<T, U>(paramOne: T, paramTwo: U) {
  return [paramOne, paramTwo];
}

const newArr = arrayify("hi", "okay");

//since T and U are generic type parameters in arrayify, you can use any type in it for newArr
