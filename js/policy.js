if (window.trustedTypes && window.trustedTypes.createPolicy) {
  window.trustedTypes.createPolicy('default', {
    createHTML: string => string.replace(/</g, '<'),
    createScript: string => string.replace(/</g, '<')
  });
}

