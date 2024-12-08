import CoreApi from '@/app/Core/CoreApi';
import { BASE_USER_ENTITY_ROUTE } from '@/app/entities/User/common/constants';
import { BaseApiResponse } from '@/app/entities/common/types';
import { IUserModel } from '@/app/entities/User/common/types';
import CoreApiError from '@/app/Core/CoreApiError';

class UserMgr {
  private static instance: UserMgr | null = null;

  protected readonly coreApi: CoreApi;

  private constructor() {
    this.coreApi = new CoreApi();
  }

  public static getInstance(): UserMgr {
    if (this.instance === null) {
      this.instance = new UserMgr();
    }

    return this.instance;
  }

  async getAll(): Promise<BaseApiResponse<IUserModel[]>> {
    const response = await this.coreApi.get<BaseApiResponse<IUserModel[]>>(
      BASE_USER_ENTITY_ROUTE
    );

    if (response instanceof CoreApiError) {
      return [];
    }

    return response;
  }
}

export default UserMgr;
