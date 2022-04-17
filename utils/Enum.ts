interface StringEnumObject {
	[enumValue: string]: string
}

export function getEnumValues(e: StringEnumObject): string[] {
	return Object.keys(e).map( i => e[i] );
}