const postData = { content: "This is a post" }; 
const comments = [{ content: "Good post" }, { content: "Thank you for the post" }];

const newObject = { ...postData, comments: [...comments] };

console.log(newObject);