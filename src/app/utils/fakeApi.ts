export type Person = {
  name: string;
  city: string;
};
const getRandomBrazilianCity = (): string => {
  const brazilianCities = [
    "São Paulo",
    "Rio de Janeiro",
    "Salvador",
    "Brasília",
    "Fortaleza",
    "Belo Horizonte",
    "Manaus",
    "Curitiba",
    "Recife",
    "Goiânia",
    "Belém",
    "Porto Alegre",
    "São Luís",
    "Natal",
    "Campinas",
    "Campo Grande",
    "São Bernardo do Campo",
    "Teresina",
    "Osasco",
    "Cuiabá",
    "Santo André",
    "João Pessoa",
    "Jaboatão dos Guararapes",
    "São José dos Campos",
    "Uberlândia",
    "Contagem",
    "Ribeirão Preto",
    "Feira de Santana",
    "Joinville",
    // Lista de cidades brasileiras (pode ser ampliada)
  ];
  const randomIndex = Math.floor(Math.random() * brazilianCities.length);
  return brazilianCities[randomIndex];
};

const generateRandomName = (): string => {
  const names = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eve",
    "Frank",
    "Grace",
    "Henry",
  ];
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
};

export const fakeApi = (): Person[] => {
  const numberOfPeople = Math.floor(Math.random() * 10) + 5; // Entre 5 e 14 pessoas
  const people: Person[] = [];
  for (let i = 0; i < numberOfPeople; i++) {
    const name = generateRandomName();
    const city = getRandomBrazilianCity();
    people.push({ name, city });
  }
  return people;
};
