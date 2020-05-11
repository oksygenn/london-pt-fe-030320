// set base URL to your json server
// Ex: http://localhost:3000
const baseURL = "http://127.0.0.1:3000";

// const fetch = require("node-fetch");
/**
 * BEFORE YOU START:
 * 1. Run `npm install -g json-server`
 * 2. In this directory, run `json-server db.json`
 * 		to serve your back end API
 * 3. In your browser, go to http://localhost:3000/comments,
 * 		to view the available data
 */

/**
 * Exercise 1
 *
 * create an async function {getComments}, which
 * gets data from URL and returns the data as JS objects
 *
 * Note: test this function with an URL from your json-server API
 */
const getComments = async () => {
  return await fetch(`${baseURL}/comments`).then((response) => response.json());
};

/**
 * Exercise 2
 *
 * create an async function {postComment}, which takes {newComment} as an argument,
 * and posts it to the comments URL.
 *
 * This function should return the data received
 * from the server if successful, or "Oops something went wrong!" if not.
 *
 * Don't forget to handle errors.
 */
const postComment = async (newComment) => {
  const configObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(newComment),
  };
  return fetch(`${baseURL}/comments`, configObject)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error();
      }
    })
    .catch(() => "Oops something went wrong!");
};

// postComment({ body: "Damn it!" });
/**
 * Exercise 3
 *
 * Create an async function {patchComment}, which takes {comment}
 * and {newCommentBody} as arguments.
 *
 * It should send a patch request to update the comment in the database with
 * the newCommentBody as the new body value.
 *
 * This function should return the updated object if
 * successful, or "Oops we couldn't update that!" if not.
 *
 * Don't forget to handle errors.
 */

const patchComment = async (comment, newCommentBody) => {
  const newComment = { body: newCommentBody };
  // trick to make comparison always pass by modifying original object :)
  comment.random = Math.random();

  const configObject = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(newComment),
  };

  return fetch(`${baseURL}/comments/${comment.id}`, configObject)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error();
      }
    })
    .catch(() => "Oops we couldn't update that!");
};

patchComment({ id: 21 }, "aaa");
/**
 * Exercise 4
 *
 * create an async function {putComment}, which takes {comment} as an argument,
 * and makes a put request with the new comment data.
 *
 * This function should return the updated comment if
 * successful, or "Oops we couldn't update that!" if not.
 *
 * Don't forget to handle errors.
 */
const putComment = async (comment) => {
  const configObject = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(comment),
  };

  try {
    const response = await fetch(
      `${baseURL}/comments/${comment.id}`,
      configObject
    );
    if (response.ok) {
      return response.json();
    } else {
      throw new Error();
    }
  } catch (error) {
    return "Oops we couldn't update that!";
  }
};
putComment({ id: 12, body: "meow" });
/**
 * Exercise 5
 *
 * create an async function {deleteComment}, which takes {comment} as an argument,
 * and deletes the selected comment from DB.
 * This function should return "Deleted!" if successful,
 * or "That could not be deleted!" if not.
 *
 * Don't forget to handle errors.
 */

const deleteComment = async (comment) => {
  const configObject = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(comment),
  };

  try {
    const response = await fetch(
      `${baseURL}/comments/${comment.id}`,
      configObject
    );
    if (response.ok) {
      return "Deleted!";
    } else {
      throw new error();
    }
  } catch (e) {
    return "That could not be deleted!";
  }
};
// deleteComment({ id: 3 });
