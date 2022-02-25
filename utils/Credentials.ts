// types
export type Credentials = {
    email: string;
    password: string;
};

// type predicates
export function isCredentials(object: unknown): object is Credentials {
	return (
		(object as Credentials).email !== undefined &&
        (object as Credentials).password !== undefined
	);
}