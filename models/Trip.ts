import { isVisibility, Visibility } from "../utils/Visibility";
import { CommonAttributes, isCommonAttributes } from "./Common";

// types
export type TripAttributes = {
    name: string;
    visibility: Visibility;
    authorId: number;
};

export type TripInput = TripAttributes;
export type TripOutput = TripAttributes & CommonAttributes;


// type predicates
export function isTripAttributes(object: unknown): object is TripAttributes {
	return (
		(object as TripAttributes).name !== undefined &&
        (object as TripAttributes).authorId !== undefined &&
        isVisibility( (object as TripAttributes).visibility ) 
	);
}

export function isTripInput(object: unknown): object is TripInput {
	return (
		isTripAttributes(object)
	);
}

export function isTripOutput(object: unknown): object is TripOutput {
	return (
		isTripAttributes(object) &&
		isCommonAttributes(object)
	);
}

export function isTripOutputArray(objects: unknown[]): objects is TripOutput[] {
	return objects.every( object => isTripOutput(object) );
}