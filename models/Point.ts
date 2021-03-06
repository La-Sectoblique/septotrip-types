import { CommonAttributes, isCommonAttributes } from "./Common";

// types
export type LocalisationPoint = {
    type: "Point";
    coordinates: number[]
};

export type PointAttributes = {
    title: string;
	description?: string;
    localisation: LocalisationPoint;
    authorId: number;
	tripId: number;
	stepId?: number;
};

export type PointInput = PointAttributes;
export type PointOutput = PointAttributes & CommonAttributes;


// type predicates
export function isLocalisationPoint(object: unknown): object is LocalisationPoint {
	return (
		object !== undefined &&
		(object as LocalisationPoint).coordinates !== undefined &&
        (object as LocalisationPoint).type === "Point"
	);
}

export function isPointAttributes(object: unknown): object is PointAttributes {
	return (
		object !== undefined &&
		(object as PointAttributes).title !== undefined &&
		(object as PointAttributes).authorId !== undefined &&
		(object as PointAttributes).tripId !== undefined &&
		isLocalisationPoint((object as PointAttributes).localisation)
	);
}

export function isPointInput(object: unknown): object is PointInput {
	return (
		object !== undefined &&
		isPointAttributes(object)
	);
}

export function isPointOutput(object: unknown): object is PointOutput {
	return (
		object !== undefined &&
		isPointAttributes(object) &&
		isCommonAttributes(object)
	);
}

export function isPointOutputArray(objects: unknown[]): objects is PointOutput[] {
	return objects.every( object => isPointOutput(object) );
}