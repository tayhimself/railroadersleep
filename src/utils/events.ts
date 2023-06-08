import Airtable from 'airtable';

const AIRTABLE_TOKEN = import.meta.env.AIRTABLE_TOKEN
const AIRTABLE_BASE = import.meta.env.AIRTABLE_BASE
const AIRTABLE_TABLE = import.meta.env.AIRTABLE_TABLE

// Language: typescript


const base = new Airtable({ apiKey: AIRTABLE_TOKEN }).base(AIRTABLE_BASE);
const table = base(AIRTABLE_TABLE);

// Get upcoming events from Airtable and return them as an array of objects
// Limits to 100 records, if we want more we need to use pagination
export const upcomingEvents = async () => {
  const records = await table.select({
    filterByFormula: `AND(DATETIME_DIFF({Date}, NOW(), 'days') >= 0, {Verified})`,
    sort: [{ field: 'Date', direction: 'asc' }],
  }).all();
  const events = records.map((record) => {
    return {
      id: record.id,
      ...record.fields,
    };
  });
  return events;
};

// Get all events from Airtable and return them as an array of objects
// Limits to 100 records, if we want more we need to use pagination
export const pastEvents = async () => {
  const records = await table.select({
    filterByFormula: `AND(DATETIME_DIFF({Date}, NOW(), 'days') < 0, {Verified})`,
    sort: [{ field: 'Date', direction: 'desc' }],
  }).all();
  const events = records.map((record) => {
    return {
      id: record.id,
      ...record.fields,
    };
  });
  return events;
};

export const getFirstPageEvents = async () => {
  const records = await table.select({}).firstPage();
  const events = records.map((record) => {
    return {
      id: record.id,
      ...record.fields,
    };
  });
  return events;
};

