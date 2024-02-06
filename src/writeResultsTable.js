const appendTableHeader = (table, tableHeadings) => {
  const thead = table.createTHead();
  let row = thead.insertRow(0);
  tableHeadings.forEach(tableHeading => {
    let cell = row.insertCell(-1);
    cell.innerHTML = tableHeading;
  });
};

const appendTableBody = (table, tableData, rowProperties) => {
  const tbody = table.createTBody();
  tableData.forEach((trait, index) => {
    const row = tbody.insertRow(index);
    rowProperties.forEach(rowProperty => {
      let cell = row.insertCell(-1);
      cell.innerHTML = trait[rowProperty];
    });
  });
};

const appendCaption = (table, caption) => {
  const captionElem = table.createCaption();
  captionElem.innerHTML = caption;
};

const appendTableToDOM = table => {
  document.querySelector('#app').appendChild(table);
};

/**
 * @summary Dynamically writes an HTML table.
 *
 * @param {Array.<Object.<string, string>>} tableData - Each object in the array represents a row of table data.
 * @param {string[]} tableHeadings - An array of headings to be added to the table.
 * @param {string[]} rowProperties - An array of properties used to specify which row data gets written to the table.
 * @param {string} caption - The table caption text.
 * @return {HTMLTableElement} - An HTML table element with appended content.
 */
const writeResultsTable = (
  tableData,
  tableHeadings,
  rowProperties,
  caption = ''
) => {
  let table = document.createElement('table');
  if (caption?.length > 0) {
    appendCaption(table, caption);
  }
  appendTableHeader(table, tableHeadings);
  appendTableBody(table, tableData, rowProperties);
  appendTableToDOM(table);
  return table;
};

export default writeResultsTable;
