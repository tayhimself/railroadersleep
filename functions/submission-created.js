
// create a netlify form submission function
const Airtable = require("airtable");

exports.handler = async (event) => {
  // Configure Airtable base connection
  const base = new Airtable({ apiKey: process.env.AIRTABLE_TOKEN }).base(process.env.AIRTABLE_BASE);
  // Configure table name
  const table = base(process.env.AIRTABLE_TABLE);

  const { httpMethod } = event
  let body = bodyParse(event.body)
  const { data } = body.payload
  const form_id = body.form_id
  // Insert data into Airtable
  await table
    .create({
      FormID: form_id,
      Date: data.date,
      Email: data.email,
      GroupName: data.group,
      Description: data.description,
      Phone: data.phone,
      Onetime: data.onetime,
      EventURL: data.site,
      NetlifyFormID: form_id,
    })
    .then((rec) => {
      console.log("Successfully inserted into airtable");
    })
    .catch((err) => {
      console.log("Error inserting into airtable");
      console.log(err.message)
      //throw err; TODO - we should do a retry in the caller in case of error
    });
  return {
    statusCode: 202,
    body: JSON.stringify({ message: "Accepted" }),
  };
};

const bodyParse = (body = {}) => {
  try {
    let b = JSON.parse(body)
    return b
  } catch {
    return {}
  }
}
