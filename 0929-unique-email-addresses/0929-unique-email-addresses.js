/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let uniqueEmails = new Set();
    
    for (const email of emails) {
        const [local, domain] = email.split('@');
        
        const modLocal = local.split('+')[0].replace(/\./g, '');
        const modEmail = `${modLocal}@${domain}`;
        uniqueEmails.add(modEmail);
    }
    
    return uniqueEmails.size;
};