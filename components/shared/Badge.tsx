interface BadgeProps {
  type: "evidence" | "forecast" | "scenario" | "emerging";
  label?: string;
}

const badgeLabels: Record<string, string> = {
  evidence: "Evidence",
  forecast: "Forecast",
  scenario: "Scenario",
  emerging: "Emerging",
};

export function Badge({ type, label }: BadgeProps) {
  return (
    <span className={`badge badge-${type}`}>
      {label ?? badgeLabels[type]}
    </span>
  );
}
