import { Model } from 'mongoose';

export type TFullName = {
  firstName: string;
  lastName: string;
};
export type TAddress = {
  street: string;
  city: string;
  country: string;
};
export type TUser = {
  userId: number;
  username: string;
  password: string;
  fullName: TFullName;
  age: number;
  email: string;
  isActive: boolean;
  hobbies: 'fishing' | 'traveling';
  address: TAddress;
};

// for using static
export interface UserModel extends Model<TUser> {
  isUserExists(id: number): Promise<TUser | null>;
}
