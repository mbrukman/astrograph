import { Factory } from "rosie";
import { Transaction } from "../../src/model";

Factory.define("transaction")
  .attr("txid", "cc5a32751a02ef6143499f30e3f975f56c1b74e39b3b002ca34d0ff012ad8e55")
  .attr("ledgerseq", 11283656)
  .attr("txindex", 2)
  .attr(
    "txbody",
    "AAAAAFkzMhcN8y7dMXQg7IfzpwAgovNKSG/ad38yQEXmgYdjAAAAZABk7YIABSx9AAAAAAAAAAAAAAABAAAAAAAAAAQAAAABT0cAAAAAAAB8CTr1M3808ueF/pik9o3XLuo85lEv/PQVDVgGdMxkxAAAAAAAAAAJUC+QAAAAAAEAAAAUAAAAAAAAAAHmgYdjAAAAQHWWwI8LQlXkm6F359Q8oORrsj939QFU2IBBCOiOCaf42305Z+MguDEcUEGtCNzvHOYVutWMMH0ienjRamx6igk="
  )
  .attr("txresult", "zFoydRoC72FDSZ8w4/l19WwbdOObOwAso00P8BKtjlUAAAAAAAAAZP////8AAAABAAAAAAAAAAP////5AAAAAA==")
  .attr(
    "txmeta",
    "AAAAAQAAAAIAAAADAKwsyAAAAAAAAAAAWTMyFw3zLt0xdCDsh/OnACCi80pIb9p3fzJAReaBh2MAAADCw+pRdwBk7YIABSx8AAAIgQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAQAAAfcyJ5IgAAAAHRtmhcgAAAAAAAAAAAAAAAEArCzIAAAAAAAAAABZMzIXDfMu3TF0IOyH86cAIKLzSkhv2nd/MkBF5oGHYwAAAMLD6lF3AGTtggAFLH0AAAiBAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAABAAAB9zInkiAAAAAdG2aFyAAAAAAAAAAAAAAAAA=="
  )
  .attr(
    "txfeemeta",
    "AAAAAgAAAAMArCsSAAAAAAAAAABZMzIXDfMu3TF0IOyH86cAIKLzSkhv2nd/MkBF5oGHYwAAAMLD6qcDAGTtggAFK6IAAAiBAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAABAAAB9zInkiAAAAAdG2aFyAAAAAAAAAAAAAAAAQCsKxQAAAAAAAAAAFkzMhcN8y7dMXQg7IfzpwAgovNKSG/ad38yQEXmgYdjAAAAwsPqpp8AZO2CAAUrogAACIEAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAEAAAH3MieSIAAAAB0bZoXIAAAAAAAAAAA="
  );

export default {
  build(overrides?: object): Transaction {
    const data = Factory.attributes("transaction", overrides);
    return new Transaction(data);
  }
};
