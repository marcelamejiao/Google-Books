export const getBooksData = async (searchTerms) => {
	
	// Protect the URL from users inputs by using special characters that belongs to the URL structure
	const encodedSearchTerms = encodeURIComponent(searchTerms);

	// Load the API Key from local storage if we have one
	const googleApiKey = window.localStorage.getItem('GOOGLE_API_KEY');
	let authenticationKey = '';
	if (googleApiKey) {
		authenticationKey = `&key=${googleApiKey}`
	}

	// Include inauthor and intitle in the query parameter to make the search more specific
	const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${encodedSearchTerms}+intitle:${encodedSearchTerms}${authenticationKey}`, {
		headers: {
			Accept: 'application/json',
		}
	});

	if (!response.ok) {
    throw new Error('Failed to fetch this book');
  }
  const data = await response.json();

	// Throw an error when there are no books in the response
	if (!data.items) {
		throw new Error('There are no books for this search.');
	}

  return data.items;
}