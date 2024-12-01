declare module 'frappe-client' {
    class FrappeClient {
      constructor(config: { wms: string; username: string; password: string });
  
      get<T>(doctype: string, name: string): Promise<{ data: T }>;
      post<T>(doctype: string, name: string, data: T): Promise<{ data: T }>;
    }
  
    export default FrappeClient;
  }
  