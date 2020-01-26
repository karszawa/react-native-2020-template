import * as Sentry from "sentry-expo";

import { sentryConfig } from "../../config";

if (sentryConfig.sentry) {
  Sentry.init({
    dsn: sentryConfig.sentry,
  });
} else {
  console.info("Sentry is not enabled.");
}
