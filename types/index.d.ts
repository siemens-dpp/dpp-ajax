import { AxiosAdapter, AxiosInstance, AxiosRequestConfig } from 'axios';

declare module '@siesam/ajax' {
    export type ajax = AxiosInstance;

    export function initAjax(config?: AxiosRequestConfig): void;

    export function resetAjax(): void;
}
