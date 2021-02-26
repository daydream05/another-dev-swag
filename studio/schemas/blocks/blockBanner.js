/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */

import { HiLink } from "react-icons/hi";

export default {
  title: "Block Banner",
  name: "blockBanner",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      lists: [],
      styles: [{ title: "Normal", value: "normal" }],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: "Internal Link",
            name: "internalLink",
            type: "object",
            blockEditor: {
              icon: HiLink,
            },
            fields: [
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
              {
                title: "Internal Link",
                name: "internal",
                type: "reference",
                to: [{ type: "page" }, { type: "product" }],
              },
            ],
          },
        ],
      },
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
  ],
};
