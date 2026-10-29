// Without JavaScript, all examples remain visible and readable.
document.querySelectorAll('[data-tabs]').forEach((group, groupIndex) => {
  const buttons = [...group.querySelectorAll('button')];
  group.setAttribute('role', 'tablist');
  const select = (index, focus = false) => {
    buttons.forEach((button, i) => {
      const selected = i === index;
      button.setAttribute('aria-selected', String(selected));
      button.tabIndex = selected ? 0 : -1;
      document.getElementById(button.dataset.panel).hidden = !selected;
    });
    if (focus) buttons[index].focus();
  };
  buttons.forEach((button, index) => {
    button.id = `tab-${groupIndex}-${index}`;
    button.setAttribute('role', 'tab');
    const panel = document.getElementById(button.dataset.panel);
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-labelledby', button.id);
    button.addEventListener('click', () => select(index));
    button.addEventListener('keydown', (event) => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % buttons.length;
      if (event.key === 'ArrowLeft') next = (index + buttons.length - 1) % buttons.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = buttons.length - 1;
      if (next !== undefined) { event.preventDefault(); select(next, true); }
    });
  });
  select(0);
});

const copyButton = document.getElementById('copy-citation');
copyButton.addEventListener('click', async () => {
  const status = document.getElementById('copy-status');
  const code = document.getElementById('bibtex-code');
  try {
    await navigator.clipboard.writeText(code.textContent);
    copyButton.textContent = 'Copied';
    status.textContent = 'Thesis citation copied to clipboard.';
    setTimeout(() => { copyButton.textContent = 'Copy BibTeX'; }, 2500);
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(code);
    selection.removeAllRanges();
    selection.addRange(range);
    copyButton.textContent = 'Select and copy';
    status.textContent = 'Automatic copying is unavailable. The citation is selected; use your copy shortcut.';
  }
});
