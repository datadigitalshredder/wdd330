//comment Model

class CommentModel {
    constructor(type){
        this.type = type;
        //get the comments out of local storage if it exists
        this.comments = readFromLS(this.type) || [];
    }
    getComments(query = null){
        if (query === null){
            // no query gets everything
            return this.comments;
        } else{
            return this.comments.filter(el => el.name === query);
        }
    }
    addComment(postName, comment){
        const newComment = {
            name: hikeName,
            date: new Date(),
            comment: Comment,
            type: type
        };
        this.comments.push(newComment);
        writeToLS(this.type, this.comments);
    }
}
function writeToLS(key, data){
    //use JSON function JSON.stringfy to make an object into a string to be stored locally
    window.localStorage.setItem(key, JSON.stringify(data));
}

function readFromLS(key){
    // get string data and turn back into JSON
    return JSON.parse(window.localStorage.getItem(key));
}

const commentUI =  `
<div class="addComment">
<h2>Add Comment</h2>
<input type = "text" id="commentEntry" />
<button id="commentSubmit">Leave Comment</button>
</div>
<h2>Comments</h2>
<ul class="comments"></ul>
`;

function renderCommentList(element, comments){
    element.innerHTML ='';
    comments.forEach(el =>{
        let item = document.createElement('li');
        item.innerHTML=`${el.name}: ${el.comment}`;
        element.appendChild(item);
    });
}
class Comments{
    constructor(type, commentElementID){
        this.type = type;
        this.commentElementID = commentElementID;
        this.model = new CommentModel(this.type);

    }
    addSubmitListener(postName){
        document.getElementById('commentSubmit').ontouchend = () => {
            // debugger;
            this.model.addComment(
              postName,
              document.getElementById('commentEntry').value
            );
            document.getElementById('commentEntry').value = '';
            this.showCommentList(postName);
          };
        }
        showCommentList(q = null) {
          try {
            const parent = document.getElementById(this.commentElementId);
            if (!parent) throw new Error('comment parent not found');
            // check to see if the commentUI code has been added yet
            if (parent.innerHTML === '') {
              parent.innerHTML = commentUI;
            }
            if (q !== null) {
              // looking at one post, show comments and new comment button
              document.querySelector('.addComment').style.display = 'block';
              this.addSubmitListener(q);
            } else {
              // no post name provided, hide comment entry
              document.querySelector('.addComment').style.display = 'none';
            }
            // get the comments from the model
            let comments = this.model.getComments(q);
            if (comments === null) {
              // avoid an error if there are no comments yet.
              comments = [];
            }
            renderCommentList(parent.lastChild, comments);
          } catch (error) {
            console.log(error);
          }
        }
      }
      

   export default Comments;

