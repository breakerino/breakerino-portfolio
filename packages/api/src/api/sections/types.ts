export interface Section {
	id: string;
	heading?: {
		title: string;
		subtitle?: string;
	}
	data?: Record<string, unknown>
}