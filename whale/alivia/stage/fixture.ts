import { test as base } from "@playwright/test";
import type { PlayWrightAiFixtureType } from "@midscene/web/playwright";
import { PlaywrightAiFixture } from "@midscene/web/playwright";

export const test = base.extend<PlayWrightAiFixtureType>(PlaywrightAiFixture({
    waitForNetworkIdleTimeout: 2000,
    waitForNavigationTimeout: 5000,
}));