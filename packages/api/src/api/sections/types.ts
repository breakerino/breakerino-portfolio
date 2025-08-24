export interface Section {
	id: string;
	component: string;
	heading?: {
		title: string;
		subtitle?: string;
	}
	data?: {
	} & Record<string, any>
}