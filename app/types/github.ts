export interface Repository {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    readme: string
    summary: string
    topics: string[] | undefined
    language: string | null | undefined
    updated_at: string | null | undefined
}
