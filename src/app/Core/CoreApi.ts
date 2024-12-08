import { BASE_API_URI } from '@/app/Core/common/constants';
import CoreApiError from '@/app/Core/CoreApiError';

class CoreApi {
  protected readonly baseUrl: string;

  constructor() {
    this.baseUrl = BASE_API_URI;
  }

  async get<T>(path: string): Promise<T | CoreApiError> {
    try {
      const response = await fetch(`${this.baseUrl}${path}`);

      if (!response.ok) {
        const errorBody = await response.json();

        return new CoreApiError({
          fault: {
            message: errorBody.message || 'An error occurred',
            status: response.status,
          },
        });
      }

      return (await response.json()) as T;
    } catch (exception) {
      const message = (exception as Error)?.message || 'Network error';

      return new CoreApiError({
        fault: {
          message,
          status: 500,
        },
      });
    }
  }
}

export default CoreApi;
