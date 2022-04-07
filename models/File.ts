import { isVisibility, Visibility } from "../utils/Visibility";
import { CommonAttributes, isCommonAttributes } from "./Common";

// types
export type FileMetadataAttributes = {
	id: string;
	name: string;
	extension: string;
	mimeType: string;
	visibility: Visibility;
};

export type FileMetadataInput = FileMetadataAttributes;
export type FileMetadataOutput = FileMetadataAttributes & CommonAttributes;

export type File = FileMetadataOutput & {
	data: Buffer;
};

// type predicates
export function isFileMetadataAttributes(object: unknown): object is FileMetadataAttributes {
	return (
		(object as FileMetadataAttributes).id !== undefined &&
		(object as FileMetadataAttributes).name !== undefined && 
		(object as FileMetadataAttributes).extension !== undefined &&
		(object as FileMetadataAttributes).mimeType !== undefined &&
		isVisibility((object as FileMetadataAttributes).visibility)
	);
}

export function isFileMetadataInput(object: unknown): object is FileMetadataInput {
	return (
		isFileMetadataAttributes(object)
	);
}

export function isFileMetadataOuput(object: unknown): object is FileMetadataOutput {
	return (
		isFileMetadataAttributes(object) &&
		isCommonAttributes(object)
	);
}

export function isFileMetadataOuputArray(objects: unknown[]): objects is FileMetadataOutput[] {
	return objects.every( object => isFileMetadataOuput(object) );
}

export function isFile(object: unknown): object is File {
	return (
		isFileMetadataOuput(object) &&
		(object as File).data !== undefined
	);
}