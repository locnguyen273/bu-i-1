export const getAllListPosts = async () =>
  await (await fetch("https://jsonplaceholder.typicode.com/posts")).json();