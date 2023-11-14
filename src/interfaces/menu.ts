export interface Menu {
	id: number;
	path: string;
	title: string;
	sublinks: Sublink[];
}

export interface Sublink {
	id: number;
	path: string;
	title: string;
}
