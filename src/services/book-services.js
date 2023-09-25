export const getBooksData = async (searchTerms) => {
	
	// Protect the URL from users inputs by using special characters that belongs to the URL structure
	const encodedSearchTerms = encodeURIComponent(searchTerms);

	// Load the API Key from local storage if we have one
	const googleApiKey = window.localStorage.getItem('GOOGLE_API_KEY');
	let authenticationKey = '';
	if (googleApiKey) {
		authenticationKey = `&key=${googleApiKey}`
	}
	
	const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodedSearchTerms}${authenticationKey}`, {
		headers: {
			Accept: 'application/json',
		}
	});

	if (!response.ok) {
    throw new Error('Failed to fetch this book');
  }
  const data = await response.json();
  return data.items;
}