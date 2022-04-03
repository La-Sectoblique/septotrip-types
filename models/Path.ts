import { CommonAttributes, isCommonAttributes } from "./Common";

// types
export type PathAttributes = {
	description: string;
};

export type PathInput = PathAttributes;
export type PathOutput = CommonAttributes & PathAttributes;

// type predicates
export function isPathAttributes(object: unknown): object is PathAttributes {
	return (
		(object as PathAttributes).description !== undefined
	);
}

export function isPathInput(object: unknown): object is PathInput {
	return (
		isPathAttributes(object)
	);
}

export function isPathOuput(object: unknown): object is PathOutput {
	return (
		isPathAttributes(object) &&
		isCommonAttributes(object)
	);
}
