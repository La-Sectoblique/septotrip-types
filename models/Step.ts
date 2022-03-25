import { CommonAttributes, isCommonAttributes } from "./Common";


// types
export type StepAttributes = {
    name: string;
    order: number;
    tripId: number;
};

export type StepInput = StepAttributes;
export type StepOutput = StepAttributes & CommonAttributes;

// type predicates
export function isStepAttributes(object: unknown): object is StepAttributes {
	return (
		(object as StepAttributes).name !== undefined &&
        (object as StepAttributes).order !== undefined &&
        (object as StepAttributes).tripId !== undefined
	);
}

export function isStepInput(object: unknown): object is StepInput {
	return (
		isStepAttributes(object)
	);
}

export function isStepOutput(object: unknown): object is StepOutput {
	return (
		isStepAttributes(object) &&
		isCommonAttributes(object)
	);
}

export function isStepOutputArray(objects: unknown[]): objects is StepOutput[] {
	return objects.every( object => isStepOutput(object) );
}