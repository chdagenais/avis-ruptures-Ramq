import * as cheerio from 'cheerio';
import axios from 'axios';

/**
 * Récupère le contenu HTML d'une URL donnée.
 * @param {string} url - L'URL à partir de laquelle récupérer le HTML.
 * @returns {Promise<Object>} - Une promesse qui résout avec la réponse de la requête HTTP.
 */
export const getHtml = async (url) => {
    try {
        return await axios.get(url);
    } catch (error) {
        console.error(error);
    }
}

/**
 * Récupère les produits avec infolettre de rupture à partir d'une URL donnée.
 * @param {string} url - L'URL à partir de laquelle récupérer les produits.
 * @returns {Promise<Array<Object>>} - Une promesse qui résout avec un tableau d'objets contenant les informations des produits.
 */
export const getProduitsAvecInfolettreRupture = async (url) => {
    const res = await getHtml(url);
    const $ = cheerio.load(res.data);
    const data = [];
    $('table tbody tr').each((i, el) => {
        const tds = $(el).find('td');
        // si tds[7] est non vide, on ajoute les données dans le tableau
        if ($(tds[6]).text().trim() === "" && $(tds[5]).text().trim() !== "") {
            data.push({
                DenominationCommune: $(tds[0]).text(),
                MarqueDeCommerce: $(tds[1]).text(),
                Forme: $(tds[2]).text(),
                Teneur: $(tds[3]).text(),
                DIN: $(tds[4]).text(),
                DateAvisRupture: $(tds[5]).text(),
                // enlever https://www.google.com/url?q= au debut de l'url et tout ce qui est après pdf& à la fin
                AvisRuptureURL: $(tds[5]).find("a").attr("href")?.replace("https://www.google.com/url?q=", "").replace(/pdf&.*/, "pdf"),
                DateFinAvis: $(tds[6]).text(),
            });
        }
    });
    // nettoyage des données
    // enlever https://www.google.com/url?q= au debut de l'url dans AvisRuptureURL

    // affichage des données dans la console
    return data;                 

}
