const url = 'https://www.reddit.com';

export const fetchSubreddits = async () => {
    const endpoint = `${url}/subreddits.json`;
    const response = await fetch(endpoint);
    const jsonResponse = await response.json();
    // console.log('fetching')
    // console.log(jsonResponse.data.children);
    return jsonResponse.data.children.map(subreddit => subreddit.data);
}

export const fetchSubredditPosts = async (subreddit) => {
    const endpoint = `${url}/r/${subreddit}/.json`;
    const response = await fetch(endpoint);
    const jsonResponse = await response.json();
    console.log('fetching')
    // console.log(jsonResponse);
    return jsonResponse.data.children;
}

export const fetchSubredditInfo = async (subreddit) => {
    const endpoint = `${url}/${subreddit}/about.json`;
    const response = await fetch(endpoint);
    const jsonResponse = await response.json();
    // console.log('fetching')
    // console.log(jsonResponse);
    return jsonResponse.data;
}

export const fetchHomePosts = async (id) => {
    const endpoint = `${url}/.json`;
    const response = await fetch(endpoint);
    const jsonResponse = await response.json();
    console.log('fetching');
    return jsonResponse.data.children;
}


export const fetchUserAvatar = async (user) => {
    const endpoint = `https://www.reddit.com/user/${user}/about.json`;
    const response = await fetch(endpoint);
    const jsonResponse = await response.json();
    // console.log(jsonResponse.data.icon_img);
    return {user: user ,url: jsonResponse.data.icon_img};
}