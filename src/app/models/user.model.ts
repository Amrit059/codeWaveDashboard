export class UserModel {
    _id: string;
    name?: string;
    password?: string;
    email?: string;
    phoneNo?: string;
    gender?: string;
    role?: string;
    dob?: Date;
    token?: string;
    isActive?: Boolean;
    about?: string;
    createdAt?: Date;
}