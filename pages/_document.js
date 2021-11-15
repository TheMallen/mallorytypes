import Document, { Html, Head, Main, NextScript } from "next/document";
import { isApple } from "../utils";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const userAgent =
      typeof window === "undefined"
        ? ctx?.req?.headers["user-agent"]
        : window.navigator.userAgent;
    return { userAgent, ...initialProps };
  }

  render() {
    const { userAgent } = this.props;
    return (
      <Html
        className={`${isApple(userAgent) ? "mac" : "not-mac"} ${
          process.env.DEBUG && "debug-screens"
        }`}
      >
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
