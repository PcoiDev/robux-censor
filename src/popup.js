const toggle = document.getElementById('toggle');
const status = document.getElementById('status');

chrome.storage.local.get(['robuxHiderEnabled'], (result) => {
  render(result.robuxHiderEnabled !== false);
});

toggle.addEventListener('change', () => {
  const enabled = toggle.checked;

  chrome.storage.local.set({ robuxHiderEnabled: enabled }, () => {
    render(enabled);

    chrome.tabs.query({ url: 'https://www.roblox.com/*' }, (tabs) => {
      tabs.forEach(tab => chrome.tabs.reload(tab.id));
    });
  });
});

function render(enabled) {
  toggle.checked = enabled;
  status.textContent = enabled ? 'Enabled' : 'Disabled';
}
