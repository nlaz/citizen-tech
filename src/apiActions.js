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
  link: record.get("Job Link"),
  description: record.get("Organization Description"),
  org_type: record.get("Organization type"),
  createdAt: record.get("Created At"),
  salary: record.get("Estimated Salary"),
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
  return results;
};
