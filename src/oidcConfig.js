const clientRoot = `https://localhost:${process.env.PORT}`;
const oidcConfig = {
  authority: `${process.env.BASE_SERVICE_URL}/tenants/${process.env.TENANT_ID}`,
  client_id: process.env.PUBLIC_CLIENT_ID,
  redirect_uri: `${clientRoot}`,
  post_logout_redirect_uri: `${clientRoot}`,
  response_type: 'code',
  scope: 'openid otds:groups'
};

export default oidcConfig;
