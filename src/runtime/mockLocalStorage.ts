
export class StorageMock {
    storage: Map<string, string>;

	public constructor() {
		this.storage = new Map();
		this.length = this.storage.size;
	}
	 /**
     * Returns the number of key/value pairs currently present in the list associated with the object.
     */
    readonly length: number;
    /**
     * Empties the list associated with the object of all key/value pairs, if there are any.
     */
    clear(): void {
		this.storage.clear()
	}
    /**
     * Returns the current value associated with the given key, or null if the given key does not exist in the list associated with the object.
     */
    getItem(key: string): string | null {
		let value = this.storage.get(key)
		if (value === undefined) {
			return null
		} else {
			return value as string
		}
	}
    /**
     * Returns the name of the nth key in the list, or null if n is greater than or equal to the number of key/value pairs in the object.
     */
    key(index: number): string | null {
		if (this.storage.size < index && index > 0) {
			return Array.from(this.storage.keys())[index]
		} else {
			return null
		}
	}
    /**
     * Removes the key/value pair with the given key from the list associated with the object, if a key/value pair with the given key exists.
     */
    removeItem(key: string): void {
		this.storage.delete(key)
	}
    /**
     * Sets the value of the pair identified by key to value, creating a new key/value pair if none existed for key previously.
     *
     * Throws a "QuotaExceededError" DOMException exception if the new value couldn't be set. (Setting could fail if, e.g., the user has disabled storage for the site, or if the quota has been exceeded.)
     */
    setItem(key: string, value: string): void {
		this.storage.set(key, value)
	}
}