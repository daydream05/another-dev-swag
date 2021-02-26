import { HiMail } from "react-icons/hi";
import { blockToPlainText } from "../../utils/blockToPlainText";

export default {
  name: "sectionMailingList",
  title: "Mailing List",
  type: "object",
  icon: HiMail,
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "sectionHeading",
    },
  ],
  preview: {
    select: {
      title: "heading.title",
      subtitle: "heading.subtitle",
    },
    prepare({ title, subtitle }) {
      const plainTitle = blockToPlainText(title);
      return {
        title: plainTitle,
        subtitle: `Section: Mailing List`,
      };
    },
  },
};
