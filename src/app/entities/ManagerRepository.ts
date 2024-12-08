import UserMgr from '@/app/entities/User/UserMgr';

class ManagerRepository {
  private static instance: ManagerRepository | null = null;

  public readonly userMgr: UserMgr;

  private constructor() {
    this.userMgr = UserMgr.getInstance();
  }

  public static getInstance(): ManagerRepository {
    if (this.instance === null) {
      this.instance = new ManagerRepository();
    }

    return this.instance;
  }
}

export default ManagerRepository;
