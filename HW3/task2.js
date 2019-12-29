const post = {
        author: "John", //вывести этот текст
        postId: 23,
        comments: [
            {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                    likes: 10,
                    dislikes: 2 //вывести это число
                }
        },
            {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                    likes: 3,
                    dislikes: 1
                }
        },
    ]
}

console.log(`author: ${post['author']}`)
console.log(`author/comments/userId=10/rating/dislikes: ${post['comments'][0]['rating']['dislikes']}`)
console.log(`author/comments/userId=5: ${post['comments'][1]['userId']}`)
console.log(`author/comments/userId=5: ${post['comments'][1]['text']}`)