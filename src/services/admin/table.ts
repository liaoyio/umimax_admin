/** Table 公共接口 */

import { request } from '@umijs/max';

interface YiApi {
  (
    url: string,
    params?:
      | {
          keyword?: string;
          current?: number;
          pageSize?: number;
        }
      | { [key: string]: any },
    data?: { [key: string]: any },
    options?: { [key: string]: any },
  ): Promise<API.ResponseStructure<any>>;
}

/**
 * 公共查询接口
 * @param url
 * @param params
 * @param options
 */
export const listApi: YiApi = (url, params, options) => {
  return request<API.ResponseStructure<any>>(url, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
};

/**
 * 公共新增接口
 * @param url
 * @param data
 * @param options
 */
export const addApi: YiApi = (url, data, options) => {
  return request<API.ResponseStructure<any>>(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
    ...(options || {}),
  });
};

/**
 * 公共编辑接口
 * @param url
 * @param data
 * @param options
 */
export const editApi: YiApi = (url, data, options) => {
  return request<API.ResponseStructure<any>>(url, {
    method: 'PUT',
    data: { ...data },
    ...(options || {}),
  });
};

/**
 * 公共删除接口
 * @param url
 * @param params
 * @param options
 */
export const deleteApi: YiApi = (url, params, options) => {
  return request<API.ResponseStructure<any>>(url, {
    method: 'DELETE',
    params: { ...params },
    ...(options || {}),
  });
};
