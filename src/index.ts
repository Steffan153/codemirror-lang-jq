import { parser } from "./syntax.grammar";
import {
  LRLanguage,
  LanguageSupport,
} from "@codemirror/language";
import { styleTags, tags as t } from "@lezer/highlight";

export const jqLanguage = LRLanguage.define({
  parser: parser.configure({
    props: [
      styleTags({
        String: t.string,
        Number: t.number,
        "import include module": t.moduleKeyword,
        "true false": t.bool,
        def: t.definitionKeyword,
        "as break label reduce foreach if then elif else end try catch": t.controlKeyword,
        null: t.null,
        Separator: t.separator,
        "( )": t.paren,
        "[ ]": t.squareBracket,
        "{ }": t.brace,
        ArithmeticOperator: t.arithmeticOperator,
        "and or not": t.logicOperator,
        ComparisonOperator: t.compareOperator,
        Identifier: t.name,
        Comment: t.comment,
        Deref: t.derefOperator,
      }),
    ],
  }),
  languageData: {
    commentTokens: { line: "#" },
  },
});

export function jq() {
  return new LanguageSupport(jqLanguage);
}
