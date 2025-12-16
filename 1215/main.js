if (loadBtn && output) {
  loadBtn.addEventListener('click', () => {
    const demo = {
      system: "Antigravity Core v1.0",
      gravityLevel: "0.03G",
      energyStatus: "Stable",
      operator: user,
      timestamp: new Date().toISOString()
    };
    output.textContent = JSON.stringify(demo, null, 2);
  });
}
