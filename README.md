# Robux Masker

Hide your Robux balance and transaction history for privacy.


## Features
- Hide your robux balance across all pages on `roblox.com`
- Hide every transactions on `roblox.com/transactions`
- Toggle to enable/disable the extention using a popup
- 0 Data is collected (feel free to consult the source code.)

> [!NOTE]
> The extension does not actually hide but replaces any sensitive information (robux & transactions only) with "???"

## Installation

### Method 1: Install from CRX file (Recommended)

1. Download `robux-masker.crx` from the [Releases](../../releases) page
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable **Developer mode** (toggle in top-right corner)
4. Drag and drop the `.crx` file into the extensions page
5. Click **Add extension** when prompted

### Method 2: Install from Source

1. Download the source code:
   - Click the green **Code** button above
   - Select **Download ZIP**
   - Extract the ZIP file to a folder
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable **Developer mode** (toggle in top-right corner)
4. Click **Load unpacked**
5. Select the extracted folder (src)
6. The extension is now installed!

## Create a release

Releases are built automatically when a tag matching `vX.Y.Z` is pushed. The
tag must match the version in `src/manifest.json`, for example `v1.0.0`.

Before the first release, create an RSA private key and add its base64-encoded
content as the GitHub repository secret `EXTENSION_PRIVATE_KEY`:

```bash
openssl genrsa 2048 | base64 -w 0
```

Then create the release tag:

```bash
git tag v1.0.0
git push origin v1.0.0
```

The workflow attaches both `robux-masker-vX.Y.Z.crx` and a ZIP source package
to the GitHub release. Keep the private key unchanged for future releases so
the extension keeps the same Chrome extension ID.

## Support

If you encounter any issues:

1. Try disabling and re-enabling the extension
2. Refresh the Roblox page
3. Check that the extension is enabled on `chrome://extensions/`
4. Open an [issue](../../issues) if problems persist

## Disclaimer

This extension is for privacy purposes only. Use responsibly and in accordance with Roblox's Terms of Service.

> [!CAUTION]
>  Some parts of the code are AI-generated. While I've reviewed and tested everything thoroughly, I'm providing this code for free so others don't have to spend time solving the same problems.