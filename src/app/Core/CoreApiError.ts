import { IApiError } from '@/app/Core/common/types';

class CoreApiError extends Error {
  public error: IApiError;

  constructor(error: IApiError) {
    super(error.fault.message);
    this.error = error;
  }
}

export default CoreApiError;
