import fetchUser from './jsonAPI';

(async () => {
  const userData = await fetchUser('Bret');
  document.querySelector('h1').innerHTML = JSON.stringify(userData);
})();

// to bundle - "bun build ./src/fetch-data.ts --outfile=./dist/bundle.js"
// bundle with watch - "bun build ./src/fetch-data.ts --outfile=./dist/bundle.js --watch"
