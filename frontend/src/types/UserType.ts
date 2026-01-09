export type User = {
    id: number,
    first_name: string,
    last_name: string | null,
    email: string,
}

export type ImportUsersResponse = {
    status: string;
    created: number;
};
