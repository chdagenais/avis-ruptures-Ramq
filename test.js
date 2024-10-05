import { getProduitsAvecInfolettreRupture } from "./index.js";
// URL de la page Google Sheets
const URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRqPUAvg-UDVo7HCZezpbc1BlK17FjA1cohM3duMrjBa_QjLZMgzS-5VGktMdbeQDle8PEui09N2g8P/pubhtml";

// Test de la fonction getProduitsAvecInfolettreRupture
// On vérifie que la fonction retourne des données
// On vérifie que les données retournées sont un tableau
// On vérifie que le tableau retourné contient au moins un élément
test('getProduitsAvecInfolettreRupture returns data', async () => {
    const data = await getProduitsAvecInfolettreRupture(URL);
    console.log(data);
    expect(data).toBeDefined();
    expect(data.length).toBeGreaterThan(0);
});