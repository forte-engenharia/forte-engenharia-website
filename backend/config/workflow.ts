export default ({ env }) => ({
  url: env("WORKFLOW_URL"),
  token: env("WORKFLOW_TOKEN"),
});
