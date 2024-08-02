/**
 * @type {import('semantic-release').GlobalConfig}
 */

export default {
  branches: [
    "main",
    { name: "develop", prerelease: true, channel: "beta" },
    { name: "staging", prerelease: true, channel: "rc" },
  ],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    // [
    //   "@semantic-release/gitlab",
    //   {
    //     gitlabUrl: "http://192.168.1.35/gitlab",
    //     assets: [{ path: "storybook-static/**", label: "Storybook" }],
    //   },
    // ],
  ],
};
