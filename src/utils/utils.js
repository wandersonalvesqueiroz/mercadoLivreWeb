export function formatBRL(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
}

export function getRangeLabel(value) {
  const ranges = [
    { min: 10, max: 20, label: "+10" },
    { min: 20, max: 30, label: "+20" },
    { min: 30, max: 40, label: "+30" },
    { min: 40, max: 50, label: "+30" },
    { min: 50, max: 100, label: "+50" },
    { min: 100, max: 150, label: "+100" },
    { min: 150, max: 200, label: "+150" },
    { min: 200, max: 250, label: "+200" },
    { min: 250, max: 300, label: "+250" },
    { min: 300, max: 350, label: "+300" },
    { min: 350, max: 400, label: "+350" },
    { min: 400, max: 450, label: "+400" },
    { min: 450, max: 500, label: "+450" },
    { min: 500, max: Infinity, label: "+500" },
  ];

  const found = ranges.find(({ min, max }) => value > min && value < max);
  return found ? found.label : null;
}
