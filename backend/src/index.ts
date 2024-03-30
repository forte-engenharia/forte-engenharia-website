let scheduledRebuild: NodeJS.Timeout = null;

async function requestSiteRebuild() {
  try {
    const workflowUrl = strapi.config.get("workflow.url") as string;
    const workflowToken = strapi.config.get("workflow.token") as string;
    await fetch(workflowUrl, {
      method: "POST",
      body: JSON.stringify({
        ref: "main",
      }),
      headers: {
        Authorization: `Bearer ${workflowToken}`,
      },
    });
  } catch {
    console.log("Could not trigger site rebuild.");
  }
}

function handleSiteRebuild() {
  if (process.env.NODE_ENV === "development") return;
  // After 3 minutes without modifications, it will rebuild the page.
  if (scheduledRebuild) clearTimeout(scheduledRebuild);
  scheduledRebuild = setTimeout(() => {
    requestSiteRebuild();
  }, 60 * 1000 * 3);
}
export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {
    strapi.db.lifecycles.subscribe({
      afterCreate: handleSiteRebuild,
      afterUpdate: handleSiteRebuild,
      afterDestroy: handleSiteRebuild,
    });
  },
};
