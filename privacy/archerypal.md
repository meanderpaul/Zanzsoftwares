# Privacy Policy — Archerypal

**Last updated:** July 8, 2026

Archerypal is an archery scorekeeping app for Android with local/P2P matches and an optional online relay for Plus features (remote play, leaderboards, social).

## Summary

- **Local match data** (names, scores) stays on your devices for offline play and syncs directly between archers via Nearby Connections when possible.
- **Plus / online features** use our match relay server: Friend ID, display name, stats, friend links, and optional **Google account link** (for device recovery) are stored on the server when you register.
- **Device credentials** (`deviceSecret`) are stored encrypted on your phone and are rotated when you restore via Google Sign-In on a new device.
- **Ads** are shown on the home screen unless you buy Remove ads or subscribe to Plus. Ads are served by **Google AdMob**.
- **Purchases** are processed by **Google Play**; we do not receive your payment card details.

## Data we store on our server (Plus / online)

When you connect to the relay server, we store:

- Friend ID and display name
- Match statistics submitted after remote matches (leaderboards)
- Friend relationships and social profile fields you choose to add
- Plus entitlement metadata (purchase token hash; server verification planned)
- If you link Google: Google account subject ID and email for account recovery

We do not sell this data. You can request deletion during beta by contacting support (self-service deletion planned).

## Data processed on your device

- **Player names** you type for a match session
- **Scores and match history** stored locally (encrypted device credentials for server access)
- **Ad-free / Plus status** — cached locally and synced with Google Play / server
- **Match state** shared via Nearby Connections or the online relay when using Plus
- **Camera** — used only to scan QR codes; images are not saved or uploaded by Archerypal

## Google Sign-In (account recovery)

If you link a Google account (More → Link Google account), we store the link between your Friend ID and Google account so you can restore on a new phone. Google processes sign-in according to [Google's Privacy Policy](https://policies.google.com/privacy).

## Advertising (Google AdMob)

The free version displays banner ads on the home screen via Google AdMob. Depending on your device settings and region, Google may process data such as:

- Advertising ID (and similar device identifiers where permitted)
- IP address and coarse location derived from IP
- Device information (e.g. OS version, device model)
- Ad interactions (e.g. impressions and clicks)
- Diagnostic information related to ad delivery

You can limit ad personalization in your **Google Account ad settings** ([adssettings.google.com](https://adssettings.google.com)). On Android you can also reset or disable the advertising ID in system settings.

Users in the European Economic Area, UK, and Switzerland may be shown a consent message before personalized ads are requested, where required by law.

## In-app purchases (Google Play Billing)

The optional **Remove ads** product is a one-time in-app purchase handled entirely by Google Play. Google processes payment and provides us only with purchase entitlement information needed to unlock ad-free mode. We do not receive or store your payment card or bank details.

## Permissions

The app requests Bluetooth, Wi‑Fi, location, camera, and internet permissions:

- **Internet** — AdMob ad requests and Google Play Billing
- **Nearby Connections** requires Bluetooth, Wi‑Fi, and location APIs for local peer discovery on Android
- **Camera** is used only for QR scanning
- **Advertising ID** (`AD_ID`) — used by AdMob when ads are shown; not used by Archerypal for its own tracking

## Third parties

- **Google Play Services** — Nearby Connections transport on device. Subject to [Google's Privacy Policy](https://policies.google.com/privacy).
- **Google AdMob** — advertising in the free version. Subject to [Google's Privacy Policy](https://policies.google.com/privacy) and [AdMob & AdSense program policies](https://support.google.com/admob/answer/6128543).
- **Google Play Billing** — in-app purchase processing. Subject to [Google Play Terms of Service](https://play.google.com/about/play-terms/).
- **Public libp2p relay nodes** — when archers use cellular or Wi‑Fi data, the app may connect to **public libp2p infrastructure** (community relay/bootstrap nodes on the internet) so phones behind carrier NAT can reach each other. These nodes act as **network helpers only**: they forward encrypted libp2p streams between your devices. They do **not** receive, store, or process your match scores or player names as application data. Relay operators are third parties not controlled by Archerypal.

## Children's privacy

The app is not directed at children under 13 and does not knowingly collect information from children.

## Contact

For privacy questions, open an issue at [github.com/meanderpaul/Archerypal](https://github.com/meanderpaul/Archerypal/issues).

## Changes

We may update this policy. The latest version is published in this repository and linked from the Google Play store listing.
