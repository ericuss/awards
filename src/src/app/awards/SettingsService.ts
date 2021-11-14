import { UserManagerSettings } from 'oidc-client';

export const getSettings = async (env: string): Promise<UserManagerSettings> => {
  const config = `../../settings.json`;
  const response = await fetch(config)
  return await response.json();
}