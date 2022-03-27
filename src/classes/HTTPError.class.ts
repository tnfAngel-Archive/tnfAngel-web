export class HTTPError {
	public message: string;
	public status: number;

	constructor(message: string, status: number) {
		this.message = `${status.toString()}: ${message}`;
		this.status = status ?? 500;
	}
}
