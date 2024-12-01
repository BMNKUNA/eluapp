import FrappeClient from 'frappe-client';
// Define the type for the Frappe response
interface FrappeResponse<T> {
  data: T;
}

// Create and configure the Frappe client
const client = new FrappeClient({
  wms: 'http://172.18.133.1:5000/',
  username: 'bmwnkuna@gmail.com',
  password: 'Sb@879454',
});

// Example function to fetch data from a DocType
export const fetchData = async <T>(): Promise<T | undefined> => {
  try {
    const response: FrappeResponse<T> = await client.get('DocType', 'your-docType-name');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Example function to create a new record
export const createRecord = async <T>(data: T): Promise<T | undefined> => {
  try {
    const response: FrappeResponse<T> = await client.post('DocType', 'your-docType-name', data);
    return response.data;
  } catch (error) {
    console.error('Error creating record:', error);
  }
};

export default client;
