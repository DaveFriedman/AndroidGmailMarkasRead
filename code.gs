# Exists as a project in https://script.google.com
# Trigger is Time based
# Requires permission to "Read, compose, send, and permanently delete all your email from Gmail"

function markArchivedAsRead() {
    var threads = GmailApp.search('label:unread -label:inbox');
    GmailApp.markThreadsRead(threads);
};
