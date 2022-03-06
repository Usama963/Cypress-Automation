const csvToJson = (csv) => {
  // console.log(csv);
  const lines = csv.split("\n");

  const users = [];
  const headers = lines[0].split(",").map((header) => header.trim());

  for (let i = 1; i < lines.length; i++) {
    if (lines[i]) {
      const obj = {};
      const currentline = lines[i].split(",");
      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j].trim();
      }

      users.push(obj);
    }
  }
  return users;
};

export default csvToJson;
//export default url1;
