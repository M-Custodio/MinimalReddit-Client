export const fetchPopularPosts = async () => {
    const posts = await fetch('https://www.reddit.com/r/popular.json')
    let result = await posts.json()
    let resultData = await result.data.children
    return resultData
}