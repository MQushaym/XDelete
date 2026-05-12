# X-Cleaner Pro: Anti-Ban Deletion Script

A lightweight JavaScript automation script designed to clean your X (formerly Twitter) profile from old tweets and replies without hitting the dreaded **429 Too Many Requests** error.

## 🚀 Key Features
- **Anti-Rate-Limit:** Implements human-like behavior with random delays and tactical pauses to bypass server-side throttling.
- **Reply Support:** Specifically optimized for the "Replies" section, which often contains the bulk of account activity.
- **Customizable Speed:** Users can easily adjust the delay parameters to fit their needs.
- **Self-Stopping:** Automatically halts after reaching a predefined limit (default: 500).

## 🛠️ How to Use
1. **Login:** Open your browser (Chrome or Edge recommended) and log into your X account.
2. **Navigate:** Go to your **Profile** and select the **Replies** tab (or Tweets).
3. **Open Console:** Press `F12` or `Right-click > Inspect > Select the "Console" tab`.
4. **Paste & Run:** Copy the entire script provided in `script.js`, paste it into the console, and hit `Enter`.
5. **Stay Active:** Keep the tab open and active to ensure the browser doesn't throttle the script's performance.

## ⚙️ Customizing Speed
You can adjust the processing speed by modifying the `delay` calls within the script:
* **To go faster:** Decrease the milliseconds in `await delay(1000)`. (Warning: Higher risk of Error 429).
* **To go slower:** Increase the milliseconds for a safer, more "human" approach.
* **Batch Size:** Change `MAX_DELETES` to any number (e.g., 100 or 1000) based on your requirements.

## 🔒 Why this script is safer?
Unlike third-party websites or external apps, this script offers:
- **Zero Data Sharing:** Your login credentials and data never leave your browser.
- **No API Permissions Needed:** You don't have to grant "Read/Write" access to unknown third-party applications.
- **Transparency:** The code is open-source and runs locally; you can audit every line of code yourself.
- **Protection from Scams:** Avoid sites that might harvest your account for spam or resale.
  
## ⚠️ Important Note
This script is for **educational purposes only**. Automation may lead to temporary account restrictions. As a developer, I recommend starting with small batches to monitor how the platform responds to your account's activity.

## 👨‍💻 Author
**Meshal Al-Qushaym** Computer Science Student at King Saud University.
