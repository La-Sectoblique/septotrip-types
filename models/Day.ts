import { CommonAttributes, isCommonAttributes } from "./Common";

// types
export type DayAttributes = {
	number: number;
	description: string;
    stepId: number;
};

export type DayInput = DayAttributes;
export type DayOutput = DayAttributes & CommonAttributes;

// type predicates
export function isDayAttributes(object: unknown): object is DayAttributes {
	return (
		(object as DayAttributes).number !== undefined &&
        (object as DayAttributes).stepId !== undefined && 
		(object as DayAttributes).description !== undefined 
	);
}

export function isDayInput(object: unknown): object is DayInput {
	return (
		isDayAttributes(object)
	);
}

export function isDayOutput(object: unknown): object is DayOutput {
	return (
		isDayAttributes(object) &&
		isCommonAttributes(object)
	);
}

export function isDayOutputArray(objects: unknown[]): objects is DayOutput[] {
	return objects.every( object => isDayOutput(object) );
}
