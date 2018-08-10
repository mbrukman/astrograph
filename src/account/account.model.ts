import AccountFlags from "./account_flags.model";
import AccountThresholds from "./account_thresholds.model";

export default class Account {
  public id: string;
  public balance: number;
  public sequenceNumber: number;
  public numSubentries: number;
  public inflationDest: string;
  public homeDomain: string;
  public thresholds: AccountThresholds;
  public flags: AccountFlags;
  public lastModified: number;

  // trustlines: [Trustline!]!
  // data: [DataEntry!]
  // signers: [Signer!]

  constructor(data: {
    accountid: string;
    balance: number;
    seqnum: number;
    numsubentries: number;
    inflationdest: string;
    homedomain: string;
    thresholds: string;
    flags: number;
    lastmodified: number;
  }) {
    this.id = data.accountid;
    this.balance = data.balance;
    this.sequenceNumber = data.seqnum;
    this.numSubentries = data.numsubentries;
    this.inflationDest = data.inflationdest;
    this.homeDomain = data.homedomain;
    this.lastModified = data.lastmodified;

    this.thresholds = new AccountThresholds(data.thresholds);
    this.flags = new AccountFlags(data.flags);
  }
}