import { useEffect } from "react";
import { WordData } from "../../types/editorTypes";

export function useTransformerListWords(list: Array<string>, currentList: WordData, handler: Function) {
    useEffect(() => {
        let result = list.reduce(
          (acc, item) => ({
            ...acc,
            [`${item}`]: {
              word: item,
              translate: currentList[item]?.translate || "",
              comment: currentList[item]?.comment || "",
            },
          }),
          {}
        );
        handler(result);
      }, [list]);
}
