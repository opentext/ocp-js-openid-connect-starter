import { UserManager } from 'oidc-client-ts';
import oidcConfig from './oidcConfig.js';
import callOcp from './callOcp.js';

const signInCallback = async () => {
  const userManager = new UserManager(oidcConfig);
  await userManager.signinCallback();
  const user = await userManager.getUser();
  if (user) {
    await callOcp(user.access_token);
  } else {
    throw new Error('Unable to retrieve user information');
  }
};

const signInRedirect = () => {
  new UserManager(oidcConfig).signinRedirect().catch(err => console.log(err));
};

try {
  const currentLocationUrl = new URL(window.location.href);
  if (currentLocationUrl.searchParams.has('code')) {
    await signInCallback();
  }
} catch (error) {
  console.log(error);
}

// Add the sign-in button click listener
document.querySelector('#sign-in').addEventListener('click', signInRedirect);

export { signInRedirect, signInCallback };
