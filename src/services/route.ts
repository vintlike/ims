import { http } from '@/utils/http/http';

enum Api {
  ROUTE_LIST = '/mock_api/getRoute'
}

interface Param {
  name: string;
}

export const getRouteApi = (data: Param) => http.post(Api.ROUTE_LIST, data);
