import { getEnumValues } from "../utils/Enum";
import { CommonAttributes, isCommonAttributes } from "./Common";

// types
export enum TodoState {
	TODO = 0,
	DOING = 1,
	DONE = 2
}

export type TodoEntryAttributes = {
	title: string;
	state: TodoState;
	tripId: number;
	description?: string;
	executionDate?: Date;
	pointId?: number;
	stepId?: number;
	pathId?: number;
}

export type TodoEntryInput = TodoEntryAttributes;
export type TodoEntryOutput = TodoEntryAttributes & CommonAttributes;

// types predicates
export function isTodoState(object: unknown): object is TodoState {
	return (
		(
			typeof object === "string" &&
			getEnumValues(TodoState).includes(object)
		) || 
		(
			typeof object === "number" && 
			getEnumValues(TodoState).includes(object)
		)
		
	);
}

export function isTodoEntryAttributes(object: unknown): object is TodoEntryAttributes {
	return (
		(object as TodoEntryAttributes).title !== undefined && 
		(object as TodoEntryAttributes).tripId !== undefined && 
		isTodoState((object as TodoEntryAttributes).state)
	);
}

export function isTodoEntryInput(object: unknown): object is TodoEntryInput {
	return (
		isTodoEntryAttributes(object)	
	);
}

export function isTodoEntryOutput(object: unknown): object is TodoEntryOutput {
	return (
		isTodoEntryAttributes(object) &&
		isCommonAttributes(object)
	);
}

export function isTodoEntryOutputArray(objects: unknown[]): objects is TodoEntryOutput[] {
	return (
		objects.every( object => isTodoEntryOutput(object) )
	);
}