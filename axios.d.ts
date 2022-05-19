interface IAxios {
    get: (url: string) => string;
    post: (url: string, data: any) => string;
}

declare const axios: IAxios;