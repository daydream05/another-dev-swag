import { HiLink } from "react-icons/hi";

export default {
  title: "Internal Link",
  name: "internalLink",
  type: "object",
  blockEditor: {
    icon: HiLink,
  },
  fields: [
    {
      title: "Internal Link",
      name: "internal",
      type: "reference",
      to: [{ type: "page" }],
    },
    {
      title: "Open in new tab?",
      name: "openInNewTab",
      description: "Read https://css-tricks.com/use-target_blank/",
      type: "boolean",
    },
    {
      title: "No follow",
      name: "nofollow",
      description: "Make this link no follow",
      type: "boolean",
    },
  ],
};
