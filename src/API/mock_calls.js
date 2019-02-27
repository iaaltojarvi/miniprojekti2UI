let jsonarray = [
    { "id": "1", "topic": "Javascript fatigue, myth or reality?", "category": "javascript" },
    { "id": "2", "topic": "Close my closures", "category": "javascript" },
    { "id": "3", "topic": "Prototype inheritance pain", "category": "javascript" },
    { "id": "4", "topic": "Cartesian headache", "category": "postgresql" },
    { "id": "5", "topic": "How to create schemas", "category": "postgresql" },
    { "id": "6", "topic": "Props are like shit, they only flow downwards", "category": "reactjs" },
    { "id": "7", "topic": "Stateful components", "category": "reactjs" },
    { "id": "8", "topic": "What the hell is package-lock.json?", "category": "nodejs" },
    { "id": "9", "topic": "Experimental features of Node 10.*", "category": "nodejs" }
]

let discussionArray = [
    { "id": "0", "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium facere, sit obcaecati quasi fugit neque, maxime facilis suscipit ratione consequuntur reprehenderit aliquam voluptates provident cumque ea sequi possimus minus fugiat!", "author": "Groot!", "timeStamp": "2019-02-27T00:00:00" },
    { "id": "1", "content": "Lorem apsum dolor sit amet consectetur adipisicing elit. Laudantium facere, sit obcaecati quasi fugit neque, maxime facilis suscipit ratione consequuntur reprehenderit aliquam voluptates provident cumque ea sequi possimus minus fugiat!", "author": "Groot!", "timeStamp": "2019-02-27T00:00:00" },
    { "id": "2", "content": "Lorem opsum dolor sit amet consectetur adipisicing elit. Laudantium facere, sit obcaecati quasi fugit neque, maxime facilis suscipit ratione consequuntur reprehenderit aliquam voluptates provident cumque ea sequi possimus minus fugiat!", "author": "Groot!", "timeStamp": "2019-02-27T00:00:00" },
    { "id": "3", "content": "Lorem epsum dolor sit amet consectetur adipisicing elit. Laudantium facere, sit obcaecati quasi fugit neque, maxime facilis suscipit ratione consequuntur reprehenderit aliquam voluptates provident cumque ea sequi possimus minus fugiat!", "author": "Groot!", "timeStamp": "2019-02-27T00:00:00" },
    { "id": "4", "content": "Lorem upsum dolor sit amet consectetur adipisicing elit. Laudantium facere, sit obcaecati quasi fugit neque, maxime facilis suscipit ratione consequuntur reprehenderit aliquam voluptates provident cumque ea sequi possimus minus fugiat!", "author": "Groot!", "timeStamp": "2019-02-27T00:00:00" },
    { "id": "5", "content": "Lorem ypsum dolor sit amet consectetur adipisicing elit. Laudantium facere, sit obcaecati quasi fugit neque, maxime facilis suscipit ratione consequuntur reprehenderit aliquam voluptates provident cumque ea sequi possimus minus fugiat!", "author": "Groot!", "timeStamp": "2019-02-27T00:00:00" },
    { "id": "6", "content": "Lorem ypsum dolor sit amet consectetur adipisicing elit. Laudantium facere, sit obcaecati quasi fugit neque, maxime facilis suscipit ratione consequuntur reprehenderit aliquam voluptates provident cumque ea sequi possimus minus fugiat!", "author": "Groot!", "timeStamp": "2019-02-27T00:00:00" }
]



export const getThreads = topic => {
    if (!topic) {
        return jsonarray;
    } else {
        return jsonarray.filter(entry => entry.category === topic);
    }
}

export const createThread = (category, topic) => {
    const newDiscussionObject = { "id": jsonarray.length + 1, "topic": topic, "category": category };
    jsonarray.push(newDiscussionObject);
    return true;
}

export const getDiscussion = (id) => {
    return discussionArray.filter(discussion => discussion.id === id);
}