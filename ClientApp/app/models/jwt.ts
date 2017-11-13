export class JWT {
	private header: any;
	private body: any;

	get userId(): string {
			return this.body['sub'];
	}

	constructor(encodedJWT: string) {
			this.parseJWT(encodedJWT);
	}

	private parseJWT(encodedJWT: string) {
			let encodedParts = encodedJWT.split('.');
			let encodedHeader = encodedParts[0].replace('-', '+').replace('_', '/');
			let encodedBody = encodedParts[1].replace('-', '+').replace('_', '/')

			this.header = JSON.parse(window.atob(encodedHeader));
			this.body = JSON.parse(window.atob(encodedBody));
	}
}