export default (state = [], action) => {
	let votes;
	let quote;

	switch (action.type) {
		case 'ADD_QUOTE':
			return [...state, action.quote]
		
		case 'REMOVE_QUOTE':
			return state.filter(quote => quote.id !== action.quoteId)
		
		case 'UPVOTE_QUOTE':
			quote = state.filter(quote => quote.id === action.quoteId)
			votes = quote[0].votes
			return [{ ...quote[0], votes: votes + 1 }]
		
			case 'DOWNVOTE_QUOTE':
			quote = state.filter(quote => quote.id === action.quoteId)
			votes = (quote[0].votes - 1) < 0 ? 0 : (quote[0].votes -1)
			return [{ ...quote[0], votes: votes }]
		
		default:
			return state;	
	}
}
