import { UserRole } from "../types/UserRole";

export class User {
  constructor(
    public id: number,
    public username: string,
    public email: string,
    public role: UserRole
  ) {}
}
