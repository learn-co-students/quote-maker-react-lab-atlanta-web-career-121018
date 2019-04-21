

export default (state = [], action) => {
    let quoteObj;
    let votes;

    switch(action.type) {

        case 'ADD_QUOTE':
            return [...state, action.quote]


        case 'REMOVE_QUOTE':
            return state.filter((q) => q.id !== action.quoteId)


        case 'UPVOTE_QUOTE':
            quoteObj = state.filter((q) => q.id === action.quoteId);
            votes = quoteObj[0].votes
            return [{...quoteObj[0], votes: votes + 1}]


        case 'DOWNVOTE_QUOTE':
            quoteObj = state.filter((q) => q.id === action.quoteId);
            votes = (quoteObj[0].votes - 1) > 0 ? (quoteObj[0].votes - 1) : 0
            return [{...quoteObj[0], votes: votes}]


        default:
            return state;

    }
};
