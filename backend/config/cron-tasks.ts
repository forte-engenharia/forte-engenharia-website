export default {
  preventSleep: {
    task: () => {
      fetch("http://127.0.0.1:1337/heartbeat");
    },
    options: {
      rule: "*/15 * * * *",
    },
  },
};
