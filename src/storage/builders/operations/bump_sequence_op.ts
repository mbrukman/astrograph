import { Memoize } from "typescript-memoize";
import { SpecificOperationBuilder } from "../";
import { NQuads } from "../../nquads";

export class BumpSequenceOpBuilder extends SpecificOperationBuilder {
  public build(): NQuads {
    super.build();

    this.pushValue("bump_to", this.body.bumpTo().toString());

    return this.nquads;
  }

  protected get resultCode(): number | undefined {
    if (!this.trXDR) {
      return;
    }

    return this.trXDR.bumpSeqResult().switch().value;
  }

  @Memoize()
  protected get body(): any {
    return this.bodyXDR.bumpSequenceOp();
  }
}
