// Date longue en français (« 15 juillet 2026 »), en UTC pour éviter tout décalage de fuseau.
export const formatDate = (d: Date) =>
  new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(d);
