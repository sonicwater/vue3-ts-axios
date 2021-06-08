import TestModuleTypes from '@/store/modules/test/interface';
import UserModuleTypes from '@/store/modules/user/interface';
export default interface RootStateTypes{
  test1: string;
}

export interface AllStateTypes extends RootStateTypes{
  testModule: TestModuleTypes;
  userModule: UserModuleTypes;
}