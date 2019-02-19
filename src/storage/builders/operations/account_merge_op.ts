import { AccountBuilder, SpecificOperationBuilder } from "../";
import { publicKeyFromBuffer } from "../../../util/xdr/account";
import { NQuads } from "../../nquads";

export class AccountMergeOpBuilder extends SpecificOperationBuilder {
  public build(): NQuads {
    super.build();

    this.pushBuilder(new AccountBuilder(publicKeyFromBuffer(this.body.destination().value())), "op.destination");

    return this.nquads;
  }

  protected get resultCode(): number | undefined {
    if (!this.trXDR) {
      return;
    }

    return this.trXDR.accountMergeResult().switch().value;
  }

  protected get body(): any {
    return this.bodyXDR;
  }
}
