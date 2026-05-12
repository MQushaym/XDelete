/**
 * X/Twitter Multi-Purpose Deletion Script (Optimized for Replies & Anti-Ban)
 * Author: Meshal Al-Qushaym
 */
const safeDeleteTweets = async () => {
  let deleteCount = 0;
  const MAX_DELETES = 500; // Target limit for this session
  const processed = new Set();
  const startTime = Date.now();
  
  // Selectors for X's modern UI components
  const selectors = {
    tweet: '[data-testid="tweet"]',
    caret: '[data-testid="caret"]',
    menuItem: '[role="menuitem"]',
    deleteConfirm: '[data-testid="confirmationSheetConfirm"]'
  };

  /**
   * Generates a balanced delay with random jitter to mimic human behavior
   * and bypass Rate Limit (Error 429).
   */
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms + Math.random() * 500));

  console.log(`🐢 Safe-Mode initiated. Target: ${MAX_DELETES} items...`);

  const runSafe = async () => {
    // Collect all menu buttons (carets) within visible tweets/replies
    const buttons = Array.from(document.querySelectorAll(`${selectors.tweet} ${selectors.caret}`))
                         .filter(b => !processed.has(b));

    for (const button of buttons) {
      if (deleteCount >= MAX_DELETES) {
        const totalTime = ((Date.now() - startTime) / 60000).toFixed(2);
        console.log(`🏆 Task Accomplished! Deleted ${deleteCount} items in ${totalTime} minutes.`);
        return;
      }

      try {
        processed.add(button);
        // Smooth scroll to simulate reading behavior
        button.scrollIntoView({ behavior: 'smooth', block: 'center' });
        await delay(1000);
        
        button.click(); // Open the tweet menu
        await delay(800); 

        const menuItems = Array.from(document.querySelectorAll(selectors.menuItem));
        const deleteOption = menuItems.find(item => item.textContent.includes('Delete'));

        if (deleteOption) {
          deleteOption.click(); // Select the delete option
          await delay(800); 
          
          const confirm = document.querySelector(selectors.deleteConfirm);
          if (confirm) {
            confirm.click(); // Final confirmation
            deleteCount++;
            console.log(`✅ Deleted: ${deleteCount}/${MAX_DELETES}`);
            
            // Strategic cooldown every 5 deletions to prevent server-side throttling
            if (deleteCount % 5 === 0) {
                console.log("⏳ Taking a tactical break to trick the server...");
                await delay(4000); 
            } else {
                await delay(2000); 
            }
          }
        } else {
          // If "Delete" isn't found (e.g., a retweet), click outside to close
          document.body.click();
          await delay(500);
        }
      } catch (err) {
        // Continue loop if a single item fails
      }
    }

    // Scroll to bottom to load more content
    window.scrollTo(0, document.body.scrollHeight);
    await delay(4000); 
    await runSafe();
  };

  runSafe();
};

safeDeleteTweets();
