/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
module.exports = (app) => {
  // Your code here
  app.log.info("Yay, the app was loaded!");

  app.on("issues.opened", async (context) => {
    const { body } = context.payload.issue;

    // create a comment
    const comment = context.issue({
      body: body.includes("Thanks") ? "You are Welcome!" : "Thanks!",
    });
    // publish it
    return context.github.issues.createComment(comment);

    const issueComment = context.issue({
      body: "Thanks for opening this issue! If this issue is related to a bug, please add the `bug` label!",
    });
    return context.octokit.issues.createComment(issueComment);
  });

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
