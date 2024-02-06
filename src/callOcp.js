import listTraitDefinitions from './ocp/listTraitDefinitions.js';
import writeResultsTable from './writeResultsTable.js';

const callOcp = async accessToken => {
  // Build some query params to pass into listTraitDefinitions to modify the response
  const queryParams = new URLSearchParams();
  // The page number required
  queryParams.append('page', '1');
  // Number of items per page
  queryParams.append('items-per-page', '10');
  // Sort by display name
  queryParams.append('sortby', 'display_name');

  const resp = await listTraitDefinitions(
    `${process.env.BASE_SERVICE_URL}/cms`,
    accessToken,
    queryParams
  );

  writeResultsTable(
    resp.data._embedded.collection,
    ['Display name', 'System name'],
    ['display_name', 'system_name'],
    'Traits currently available in OCP'
  );
};

export default callOcp;
