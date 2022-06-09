import { isVisibility, Visibility } from "../utils/Visibility";
import { CommonAttributes, isCommonAttributes } from "./Common";

// types
export type FileMetadataAttributes = {
	name: string;
	extension: string;
	mimeType: string;
	visibility: Visibility;
	tempFileId?: string;
	tripId: number;
	pointId?: number;
	stepId?: number;
	pathId?: number;
};

export type FileMetadataInput = FileMetadataAttributes;
export type FileMetadataOutput = FileMetadataAttributes & CommonAttributes;

// type predicates
export function isFileMetadataAttributes(object: unknown): object is FileMetadataAttributes {
	return (
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
		(object as FileMetadataOutput).tempFileId !== undefined &&
		isFileMetadataAttributes(object) &&
		isCommonAttributes(object)
	);
}

export function isFileMetadataOuputArray(objects: unknown[]): objects is FileMetadataOutput[] {
	return objects.every( object => isFileMetadataOuput(object) );
}