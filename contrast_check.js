(() => {
  const results = [];
  const lum = (r, g, b) => {
    const s = [r, g, b].map(c => {
      c /= 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * s[0] + 0.7152 * s[1] + 0.0722 * s[2];
  };
  document.querySelectorAll('*').forEach(el => {
    const style = window.getComputedStyle(el);
    const color = style.color;
    const bg = style.backgroundColor;
    if (!color || !bg || bg === 'rgba(0, 0, 0, 0)') return;
    const text = el.textContent.trim();
    if (!text || text.length > 60 || text.length < 2 || el.children.length > 1) return;
    const m1 = color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)/);
    const m2 = bg.match(/rgb\((\d+),\s*(\d+),\s*(\d+)/);
    if (!m1 || !m2) return;
    const l1 = lum(+m1[1], +m1[2], +m1[3]);
    const l2 = lum(+m2[1], +m2[2], +m2[3]);
    const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
    const fs = parseFloat(style.fontSize);
    const needed = fs >= 18 ? 3 : 4.5;
    if (ratio < needed) {
      results.push({
        text: text.substring(0, 30),
        ratio: ratio.toFixed(2),
        needed,
        color,
        bg,
        cls: (el.className || '').substring(0, 60)
      });
    }
  });
  return results.slice(0, 15);
})()
