import Link from "next/link";
import { ArrowRight, CheckCircle, Store } from "lucide-react";
import { softwareList } from "../data/softwareData";

export default function CommercePage() {
  const commerceSoftware = softwareList.filter((sw) => sw.categories.includes("commerce"));

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Store className="mx-auto mb-6" size={64} />
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Meilleur logiciel de caisse commerce : comparatif 2026
            </h1>
            <p className="text-xl text-green-100">
              Trouvez le logiciel de caisse idéal pour votre commerce : boutique, magasin, retail. Solutions
              conformes, complètes et faciles à utiliser.
            </p>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Quel est le meilleur logiciel de caisse pour commerce ?
            </h2>

            <p className="text-gray-700 mb-6">
              Un logiciel de caisse pour commerce doit offrir des fonctionnalités adaptées à la vente au
              détail : gestion des stocks en temps réel, codes-barres, variations de produits (taille,
              couleur), et reporting des ventes.
            </p>

            <p className="text-gray-700 mb-6">
              Dans ce guide complet, découvrez les meilleures solutions de caisse pour commerces et boutiques
              en France. Nous avons comparé les prix, les fonctionnalités et la facilité d'utilisation pour vous
              aider à faire le bon choix.
            </p>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pourquoi un logiciel de caisse pour commerce ?</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">
                    <strong>Obligation légale :</strong> depuis 2018, tout commerce doit utiliser un logiciel certifié
                    NF525
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">
                    <strong>Gain de temps :</strong> automatisez la gestion des stocks et des ventes
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">
                    <strong>Meilleure gestion :</strong> suivez vos performances avec des rapports détaillés
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">
                    <strong>Expérience client :</strong> paiements rapides et programme de fidélité
                  </span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Fonctionnalités essentielles pour un commerce</h2>

            <p className="text-gray-700 mb-6">Contrairement à un restaurant, un commerce de détail a des besoins spécifiques :</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2">📦 Gestion des stocks</h4>
                <p className="text-gray-700 text-sm">Suivi en temps réel, alertes de stock bas, inventaire automatisé</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2">🏷️ Code-barres</h4>
                <p className="text-gray-700 text-sm">Scan rapide, génération d'étiquettes, gestion des SKU</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2">👥 Programme fidélité</h4>
                <p className="text-gray-700 text-sm">Cartes de fidélité, promotions, gestion clients</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2">🌐 E-commerce</h4>
                <p className="text-gray-700 text-sm">Synchronisation boutique en ligne, click & collect</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Comparison */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Comparatif des logiciels de caisse pour commerce
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commerceSoftware.map((software) => (
              <div
                key={software.id}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow"
              >
                {software.badge && (
                  <div className="bg-purple-100 text-purple-700 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    {software.badge}
                  </div>
                )}
                <img
                  src={software.image}
                  alt={software.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{software.name}</h3>
                <p className="text-gray-600 mb-4">{software.tagline}</p>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Points forts :</p>
                  <ul className="space-y-2">
                    {software.pros.slice(0, 3).map((pro, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-700">Prix :</p>
                  <p className="text-lg font-bold text-green-600">{software.price}</p>
                </div>

                <Link
                  href={`/logiciel/${software.slug}`}
                  className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold text-center block transition-colors"
                >
                  Voir la fiche détaillée
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Quel est le prix d'un logiciel de caisse pour commerce ?
            </h2>

            <p className="text-gray-700 mb-6">
              Le prix d'un logiciel de caisse pour commerce varie selon plusieurs facteurs :
            </p>

            <div className="bg-gray-50 rounded-xl p-6 my-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fourchette de prix typique :</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-24 font-semibold text-gray-900 flex-shrink-0">0 - 50€</div>
                  <div className="text-gray-700">Solutions d'entrée de gamme, paiement à la transaction</div>
                </li>
                <li className="flex items-start">
                  <div className="w-24 font-semibold text-gray-900 flex-shrink-0">50 - 100€</div>
                  <div className="text-gray-700">Solutions complètes pour petits commerces</div>
                </li>
                <li className="flex items-start">
                  <div className="w-24 font-semibold text-gray-900 flex-shrink-0">100 - 200€</div>
                  <div className="text-gray-700">Solutions professionnelles avec fonctionnalités avancées</div>
                </li>
                <li className="flex items-start">
                  <div className="w-24 font-semibold text-gray-900 flex-shrink-0">200€+</div>
                  <div className="text-gray-700">Solutions entreprise, multi-magasins</div>
                </li>
              </ul>
            </div>

            <p className="text-gray-700 mb-6">
              <strong>Attention aux coûts cachés :</strong> certaines solutions facturent des frais supplémentaires
              pour les transactions, le matériel, la formation ou le support technique.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              Comment choisir son logiciel de caisse commerce ?
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900 mb-1">Évaluez vos besoins</h4>
                  <p className="text-gray-700">Nombre de caisses, volume de transactions, gestion des stocks...</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900 mb-1">Vérifiez la conformité</h4>
                  <p className="text-gray-700">Le logiciel doit être certifié NF525 pour être légal en France</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900 mb-1">Testez avant d'acheter</h4>
                  <p className="text-gray-700">Profitez des périodes d'essai pour tester l'interface et les fonctionnalités</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-bold">4</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900 mb-1">Pensez à l'évolutivité</h4>
                  <p className="text-gray-700">Choisissez une solution qui pourra grandir avec votre commerce</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-8 text-center mt-12">
              <h3 className="text-2xl font-bold text-white mb-4">Trouvez le logiciel idéal pour votre commerce</h3>
              <p className="text-green-100 mb-6">Comparez gratuitement toutes les solutions en quelques clics</p>
              <Link
                href="/comparateur"
                className="inline-flex items-center bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Comparer les logiciels
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

