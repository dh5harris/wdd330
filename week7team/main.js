import Hikes from "./hikes.js";
import Comments from "./comments.js";

const hikes = new Hikes('hikeListId');
const comments = new Comments('commentList');
comments.newComment()
hikes.showHikeList()