// src/utils/clipboard.ts

export const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).then(() => {
    // You could add a toast notification here to indicate successful copying
    console.log('Copied to clipboard');
  }, (err) => {
    console.error('Could not copy text: ', err);
  });
};