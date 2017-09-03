var posts = [];
var id = 0;
var commentId = 0;

function createPost(post) {
    var post = {
        post: post,
        id: id,
        comments: []
    }
    posts.push(post);
    id++;
}
var createComment = function (postIndex, comment, userName) {

    var comment = {
        comment: comment,
        userName: userName,
        id: commentId
    }
    posts[postIndex].comments.push(comment)
    commentId++;
}


$('.add-post').on('click', function () {
    var post = $('#post-name').val();
    createPost(post);
    renderView();
});

function renderView() {
    $('.posts').empty();
    for (var i = 0; i < posts.length; i++) {
        $('.posts').append('<div class="post" data-id=' + posts[i].id + '>'
            + '<button type="button" class="remove">REMOVE</button>'
            + '<p>' + posts[i].post + '</p>' +
            '<label>Comment:</label><input class="commentInput" type="text" />' +
            '<label>User name:</label><input class="userNameInput" type="text" />' +
            '<button type="button" class="btn btn-primary btn-sm addComment">Comment</button><a class="shareLink" href="url" >Share your post<a/>')
        for (var j = 0; j < posts[i].comments.length; j++) {
            $('div[data-id=' + i + ']').append('<br><p class="comment">' + posts[i].comments[j].userName + ' commented ' + posts[i].comments[j].comment + '</p><button type="button" class="btn btn-primary btn-sm removeComment">Remove Comment</button>')

        }
    }

        
        $('.addComment').on('click', function () {
            
                        var comment = $(this).siblings('.commentInput').val();
                        var userName = $(this).siblings('.userNameInput').val();
                        var index = $(this).closest('.post').index();
            
                        createComment(index, comment, userName);
                        renderView();
                    });

        $('.remove').on('click', function ()  {
            var pId = $(this).parent().index()
            posts.splice(pId, 1);
            console.log(posts);
            renderView();
        });


        $('.removeComment').on('click', function () {
            var index=$(this).closest('.post').index();
            var commentID = $(this).closest('.comment').index();
            posts[index].comments.splice(commentID, 1);
            console.log(posts[index].comments);
            renderView();

         $(".shareLink").click(function() {
             $(this).siblings('.post')
        });


    });

}
