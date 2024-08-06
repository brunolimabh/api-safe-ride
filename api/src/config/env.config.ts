const { PORT } = process.env;

export default class EnvConfig {
  static get port(): number {
    return parseInt(PORT || "5000");
  }
}
