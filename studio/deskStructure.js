// deskStructure.js
import S from "@sanity/desk-tool/structure-builder";
import EditIcon from "part:@sanity/base/edit-icon";
import EyeIcon from "part:@sanity/base/eye-icon";

import IframePreview from "./src/previews/iframe/iframe-preview";

const localURL = 'http://localhost:8000'
const gatsbyPreview = "https://preview-swagascript.gtsb.io";
const previewURL = window.location.hostname === 'localhost' ? localURL : gatsbyPreview

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Home")
        .child(S.document().schemaType("page").documentId("home")),
      // Add a visual divider (optional)
      S.divider(),
      S.listItem()
        .title("Product")
        .schemaType("product")
        .child(
          S.documentTypeList("product")
            .title("Products")
            .child((documentId) =>
              S.document()
                .documentId(documentId)
                .schemaType("product")
                .views([
                  S.view.form().icon(EditIcon),
                  S.view
                    .component(IframePreview)
                    .options({ previewURL })
                    .title("Web Preview")
                    .icon(EyeIcon),
                ])
            )
        ),
      // List out the rest of the document types, but filter out the config type
      ...S.documentTypeListItems().filter(
        (listItem) => !["siteSettings", "product"].includes(listItem.getId())
      ),
    ]);
