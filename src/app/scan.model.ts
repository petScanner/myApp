export class Scan {
  constructor(
    public createdAt: Date,
    public userID?: string,
    public userName?: string,
    public petID?: string,
    public petName?: string,
    public temp?: string,
  ) {}
}
