import { parse } from 'date-fns';

function parseStripeDateFormat(dateString) {
  return parse(dateString, 'dd/MM/yyyy HH:mm:ss', new Date());
}
// Codealong: Data Sorting and Filtering in Node.js
export function sortBySubscriptionDate(input) {
  return input.sort(
    (a, b) => new Date(a.subscribeDate) - new Date(b.subscribeDate),
  );
}

export function sortByFirstName(input) {
  return input.sort((a, b) => {
    if (a.firstName < b.firstName) {
      return -1;
    }
    if (a.firstName > b.firstName) {
      return 1;
    }
    return 0;
  });
}

export function filterToFirstNameStartingWithB(input) {
  return input.filter((user) => user['First Name'].startsWith('B'));
}

export function filterToCreatedAfter2010(input) {
  return input.filter((user) => {
    const date = parseStripeDateFormat(user.created_at_date);
    return date <= new Date('2008-01-01');
  });
}

// Codealong: Data Aggregation, Deduplication and Cleansing in Node.js
export function aggregateAllChannels(
  inputHubspot,
  inputMailchimp,
  inputStripe,
) {
  return [];
}

export function deduplicate(input) {
  return input;
}

export function cleanse(input) {
  return input;
}

// Codealong: Data Analysis in Node.js
export function getInterestedRepeatCustomers(inputHubspot, inputStripe) {
  return [];
}

export function getTotalValueOfAllCustomers(input) {
  return input;
}

export function getUsersWithNonMatchingEmails(inputMailchimp, inputStripe) {
  return [];
}
