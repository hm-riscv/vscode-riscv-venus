import * as path from 'path';

/**
 * Converts a path to a posix path.
 * 
 * @param p a path
 * @returns the path formatted with posix seperator /
 */
export function toPosixPath(p: string) : string {
	return p.charAt(0).toLowerCase() + p.slice(1).split(path.sep).join(path.posix.sep);
}

