import { HiQuestionMarkCircle } from "react-icons/hi";
import { blockToPlainText } from "../../utils/blockToPlainText";

export default {
  name: "sectionProductList",
  title: "Product List",
  type: "object",
  icon: HiQuestionMarkCircle,
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "sectionHeading",
    },
    {
      name: "products",
      title: "Products",
      type: "array",
      of: [{ type: "reference", to: [{ type: "product" }] }],
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
        subtitle: `Section: Product List`,
      };
    },
  },
};
