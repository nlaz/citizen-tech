import Airtable from "airtable";
import config from "./config";

const base = new Airtable({ apiKey: config.airtableApiKey }).base(config.airtableApiId);

const getJobFromRecord = record => ({
  id: record.id,
  title: record.get("Title"),
  organization: record.get("Organization"),
  location: record.get("Location"),
  state: record.get("State"),
  role_types: record.get("Role Types"),
  employment_type: record.get("Employment Type"),
  remote_friendly: record.get("Remote Friendly"),
  deadline: record.get("Application Deadline"),
  link: record.get("Link"),
  statement: record.get("Statement"),
  org_type: record.get("Org type"),
});

export const fetchJobs = async () => {
  const results = [];
  await base("Code For America")
    .select()
    .eachPage((records, fetchNextPage) => {
      records.forEach(record => {
        results.push(getJobFromRecord(record));
      });
      fetchNextPage();
    });
  console.log(results);
  return results;
};
