import { CommonAttributes, isCommonAttributes } from "./Common";

// types
export type UserAttributes = {
    email: string;
	firstName: string;
	lastName: string;
	hashedPassword: string;
};

export type UserInput = UserAttributes;
export type UserOutput = Omit<UserAttributes, "hashedPassword"> & CommonAttributes;


// type predicates
export function isUserAttributes(object: unknown): object is UserAttributes {
	return (
		(object as UserAttributes).email !== undefined &&
		(object as UserAttributes).firstName !== undefined &&
		(object as UserAttributes).lastName !== undefined &&
		(object as UserAttributes).hashedPassword !== undefined
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