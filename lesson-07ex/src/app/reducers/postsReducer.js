export default function reducer(state={
    post: {
        id: null,
        title: null,
        body: null,
    },
    fetching: false,
    fetched: false,
    error: null,
}, action) {

    switch (action.type) {
        case "FETCH_POST": {
            return {...state, fetching: true}
        }
        case "FETCH_POST_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        }
        case "FETCH_POST_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                post: action.payload,
            }
        }
        case "SET_POST_TITLE": {
            return {
                ...state,
                post: {...state.post, title: action.payload},
            }
        }
        case "SET_POST_BODY": {
            return {
                ...state,
                post: {...state.post, body: action.payload},
            }
        }
    }

    return state
}


export function fetchPagePostDetailComment(id){
    return(dispatch) => {
        const getPostById = () =>  axios.get(`${Config.apiUrl}/posts/${id}`);
        const getCommentsById = () =>  axios.get(`${Config.apiUrl}/posts/${id}/comments`);
        axios.all([getPostById(),getCommentsById()])
            .then(axios.spread((dataPost,dataComments)=>(
                dispatch(fetchSuccessPostDetail(dataPost,dataComments))
            )))
            .catch((err)=>{
                dispatch(fetchFailedPostDetail());
            })
    }
}