export type UserRole = 'super_admin' | 'content_moderator' | 'community_moderator' | 'support' | 'student';

export interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  role: UserRole;
  faculty: string;
  created_at: string;
}

export interface AuditLog {
  id: string;
  admin_id: string;
  action: string;
  details: string;
  created_at: string;
}
