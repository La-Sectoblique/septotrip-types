import { CommonAttributes, isCommonAttributes } from "./Common";

// types
export type LogbookEntryAttributes = {
    title: string;
	text?: string;
	authorId: number;
	tripId: number;
};

export type LogbookEntryInput = LogbookEntryAttributes;
export type LogbookEntryOutput = LogbookEntryAttributes & CommonAttributes;


// type predicates
export function isLogbookEntryAttributes(object: unknown): object is LogbookEntryAttributes {
	return (
		(object as LogbookEntryAttributes).title !== undefined  &&
		(object as LogbookEntryAttributes).authorId !== undefined &&
		(object as LogbookEntryAttributes).tripId !== undefined
	);
}

export function isLogbookEntryInput(object: unknown): object is LogbookEntryInput {
	return (
		isLogbookEntryAttributes(object)
	);
}

export function isLogbookEntryOutput(object: unknown): object is LogbookEntryOutput {
	return (
		isLogbookEntryAttributes(object) &&
		isCommonAttributes(object)
	);
}

export function isLogbookEntryOutputArray(objects: unknown[]): objects is LogbookEntryOutput[] {
	return objects.every( object => isLogbookEntryOutput(object) );
}