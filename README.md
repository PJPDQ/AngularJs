This is a blog commentary webpage that enables user to post a blog about their day.
User will able to make a comment from that post they made earlier. 

It's purpose is to build a simple 'blogging' application with a comment system for each blog post. 
The app does not need to have a functional backend, i.e. when the page is refreshed, it is okay for the app data to be reset. 
However, it is expected that the data of each 'session' should be persisted as the user navigates through different blog posts.

# Features

- The user can create a new blog post (each blog just needs 2 simple input fields: one for 'title' and one for 'content')
- The new blog must be added to a 'navigation pane' of sorts, so that the user can click on each blog to navigate to it.
- In each blog, the user can also add comments at the bottom, and the comments section must be linked to that blog.
    - I.e. when the user navigates to a different blog, the comments section will load the added comments for that specific blog. (Hint: you can give each blog a unique ID and link the comment to that ID for easy retrieval.)
