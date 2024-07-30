# Cache Clearer Addon for Firefox

![Cache Clearer Icon](icon.png)

## Overview

Cache Clearer is a lightweight Firefox addon designed to automatically clear your browser cache every 30 minutes. This simple tool helps improve browser performance and ensures you're always viewing the most up-to-date content.

## Features

- 🕒 **Automatic Clearing**: Clears browser cache every 30 minutes
- 🚀 **Performance Boost**: Helps maintain browser speed and efficiency
- 🪶 **Lightweight**: Minimal impact on browser performance
- 🔧 **Simple Setup**: Easy to install and use

## Installation


You can install the Cache Clearer addon from the official Mozilla Add-ons website:

[Cache Clearer](https://addons.mozilla.org/en-US/firefox/addon/cache-clearer/)

Alternatively, you can install it locally by following these steps:

1. Clone this repository: `git clone https://github.com/yourusername/cache-clearer-addon.git`


 2.  Open Firefox and navigate to `about:debugging#/runtime/this-firefox`
 3.  Click on "Load Temporary Add-on".
 4.  Select the cache-clearer-addon.zip file from the cloned repository.

Once installed, the addon works automatically in the background. You can verify its operation by checking the browser console for the "Cache cleared" message every 30 minutes.

## Files

- `manifest.json`: Addon configuration
- `background.js`: Core functionality
- `icon.png`: Addon icon (48x48 pixels)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the [GNU General Public License v3.0](LICENSE).

## Disclaimer

This addon does not collect or store any personal data. It simply clears the browser cache at regular intervals.

