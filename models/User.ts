import { CommonAttributes, isCommonAttributes } from "./Common";

// types
export type UserAttributes = {
    email: string;
};

export type UserInput = UserAttributes;
export type UserOutput = UserAttributes & CommonAttributes;


// type predicates
export function isUserAttributes(object: unknown): object is UserAttributes {
	return (
		(object as UserAttributes).email !== undefined
	);
}

export function isUserInput(object: unknown): object is UserInput {
	return (
		isUserAttributes(object)
	);
}

export function isUserOutput(object: unknown): object is UserOutput {
	return (
		isUserAttributes(object) &&
		isCommonAttributes(object)
	);
}