export function formatTeamAndServiceName(team: string): string {
  return team.split("-").join(" ");
}
