import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'nh25gnbi',
  dataset: 'production',
  apiVersion: '2022-03-10',
  useCdn: false,
  token: "skEvlZ8oLvpZmi3aBlUfCGWaMyXcLWoaqoZwMYMi3tbS24eEOWQ9Vv1NdxYUUeGozHTbczraMp90SZtEXK4nryavNIF3qCBffLAPmvZ181ikJRX0pvNvBcTfsE0lSdsVwwbi9wzS146KHXuITIPIRnsoRnf8MTdqbw1CQgvuKq6FFMxgtYn7",
});
