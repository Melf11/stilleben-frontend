export interface UserInterface {
  username?: string,
  password?: string,
  roles?: Array<string>;
  access_token?: string;

  blocked?: boolean;
  confirmed?: boolean;
  created_at?: string;
  email?: string;
  theme?: string;
  id: number;
  provider?: string;
  role?: {
    id: number,
    name: string,
    description: string,
    type: string,
  };
  frontend_roles?: [{
    id: number,
    name: string,
    description: string,
    type: string,
  }];
  host_groups?: Array<string>;
  updated_at: string;
}
