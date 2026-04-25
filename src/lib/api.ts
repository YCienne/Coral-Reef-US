export async function submitInvestorBriefing(data: any) {
  const res = await fetch("/api/investor-briefing", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to submit");
  }

  return res.json();
}