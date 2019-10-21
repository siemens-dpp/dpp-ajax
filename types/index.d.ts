import {
    AxiosAdapter,
    AxiosResponse,
    AxiosRequestConfig,
    AxiosInterceptorManager,
    AxiosInterceptorManager
} from "axios";

declare module "@ofm/ajax" {
    export interface AjaxResponse<T = any> {
        /**
         * return data
         */
        data: T;
        /**
         * whether the request is success, most api use isSuccess
         */
        isSuccess: boolean;
        /**
         * whether the request is success, most api use isSuccess, some new module use success
         */
        success: boolean;
        /**
         * return code
         */
        code: number;
        /**
         * return message, usually error message as i18n key
         */
        msg: string;
        /**
         * i18n key attachment
         */
        attachmentMap: any;
    }

    export interface AjaxResponse<T = any> extends Promise<AjaxResponse<T>> {}

    export interface AjaxInstance {
        defaults: AxiosRequestConfig;
        interceptors: {
            request: AxiosInterceptorManager<AxiosRequestConfig>;
            response: AxiosInterceptorManager<AxiosResponse>;
        };
        request<T = any>(config: AxiosRequestConfig): AjaxResponse<T>;
        get<T = any>(url: string, config?: AxiosRequestConfig): AjaxResponse<T>;
        delete(url: string, config?: AxiosRequestConfig): AjaxResponse;
        head(url: string, config?: AxiosRequestConfig): AjaxResponse;
        post<T = any>(
            url: string,
            data?: any,
            config?: AxiosRequestConfig
        ): AjaxResponse<T>;
        put<T = any>(
            url: string,
            data?: any,
            config?: AxiosRequestConfig
        ): AjaxResponse<T>;
        patch<T = any>(
            url: string,
            data?: any,
            config?: AxiosRequestConfig
        ): AjaxResponse<T>;
    }

    export const ajax: AjaxInstance;

    export function initAjax(config?: AxiosRequestConfig): void;

    export function resetAjax(): void;
}
