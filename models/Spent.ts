import { getEnumValues } from "../utils/Enum";
import { CommonAttributes, isCommonAttributes } from "./Common";

// types
export enum SpentCategory {
	FOOD = "FOOD",
	TRANSPORT = "TRANSPORT",
	ENTERTAINMENT = "ENTERTAINMENT",
	SHOPPING = "SHOPPING",
	OTHER = "OTHER"
}

export type SpentAttributes = {
	authorId: number;
	tripId: number;
	comment?: string;
	category: SpentCategory;
	amount: number;
}

export type SpentInput = SpentAttributes;
export type SpentOutput = SpentAttributes & CommonAttributes;

// type predicates
export function isSpentCategory(object: unknown): object is SpentCategory {
	return (
		typeof object === "string" &&
		getEnumValues(SpentCategory).includes(object)
	);
}

export function isSpentAttributes(object: unknown): object is SpentAttributes {
	return (
		(object as SpentAttributes).authorId !== undefined &&
		(object as SpentAttributes).amount !== undefined &&
		(object as SpentAttributes).tripId !== undefined &&
		isSpentCategory((object as SpentAttributes).category)
	);
}

export function isSpentInput(object: unknown): object is SpentInput {
	return (
		isSpentAttributes(object)
	);
}

export function isSpentOutput(object: unknown): object is SpentOutput {
	return (
		isSpentAttributes(object) &&
		isCommonAttributes(object)
	);
}

export function isSpentOutputArray(objects: unknown[]): objects is SpentOutput[] {
	return objects.every( object => isSpentOutput(object) );
} 