/**
 * Smooth page transition with background fade effect
 * This script adds fade-out animation to backgrounds when navigating away
 */

(function() {
  // Don't apply transitions to same-page navigation or external links
  const isInternalLink = (url) => {
    try {
      const urlObj = new URL(url, window.location.href);
      return urlObj.origin === window.location.origin;
    } catch {
      return false;
    }
  };

  // Handle clicks on internal links
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href]');
    if (!link) return;

    const href = link.getAttribute('href');
    
    // Skip if it's not an internal link, starts with #, or has target="_blank"
    if (!isInternalLink(href) || href.startsWith('#') || link.getAttribute('target') === '_blank') {
      return;
    }

    // Add fade-out class to trigger CSS animation
    document.body.classList.add('page-leaving');
    
    // Allow animation to complete before navigating
    setTimeout(() => {
      window.location.href = href;
    }, 400); // Matches fadeOutBackground animation duration
    
    // Prevent default navigation
    e.preventDefault();
  });

  // Remove fade-out class when page loads (for browser back button)
  window.addEventListener('pageshow', () => {
    document.body.classList.remove('page-leaving');
  });
})();
