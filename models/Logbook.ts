import { CommonAttributes, isCommonAttributes } from "./Common";

// types
export type LogbookEntryAttributes = {
    title: string;
	text?: string;
	logbookId: number;
};

export type LogbookAttributes = {
	name: string;
	authorId: number;
	tripId: number;
};

export type LogbookInput = LogbookAttributes;
export type LogbookOutput = LogbookAttributes & CommonAttributes;

export type LogbookEntryInput = LogbookEntryAttributes;
export type LogbookEntryOutput = LogbookEntryAttributes & CommonAttributes;


// type predicates
export function isLogbookEntryAttributes(object: unknown): object is LogbookEntryAttributes {
	return (
		(object as LogbookEntryAttributes).title !== undefined  &&
		(object as LogbookEntryAttributes).logbookId !== undefined
	);
}

export function isLogbookAttributes(object: unknown): object is LogbookAttributes {
	return (
		(object as LogbookAttributes).name !== undefined &&
		(object as LogbookAttributes).authorId !== undefined &&
		(object as LogbookAttributes).tripId !== undefined
	);
}

export function isLogbookInput(object: unknown): object is LogbookInput {
	return (
		isLogbookAttributes(object)
	);
}

export function isLogbookOutput(object: unknown): object is LogbookOutput {
	return (
		isLogbookAttributes(object) &&
		isCommonAttributes(object)
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