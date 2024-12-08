import CoreApiError from '@/app/Core/CoreApiError';

export type BaseApiResponse<T> = T | CoreApiError;
