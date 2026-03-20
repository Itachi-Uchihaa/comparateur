import Link from "next/link";
import { ArrowRight, CheckCircle, UtensilsCrossed } from "lucide-react";
import { softwareList } from "../data/softwareData";

export default function RestaurantPage() {
  const restaurantSoftware = softwareList.filter((sw) => sw.categories.includes("restaurant"));

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <UtensilsCrossed className="mx-auto mb-6" size={64} />
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Meilleur logiciel de caisse restaurant : comparatif 2026
            </h1>
            <p className="text-xl text-blue-100">
              Un logiciel de caisse pour restaurant doit répondre à des besoins spécifiques : gestion
              des tables, commandes en salle, encaissement rapide et gestion des stocks.
            </p>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Quel logiciel de caisse choisir pour un restaurant ?
            </h2>

            <p className="text-gray-700 mb-6">
              Choisir un logiciel de caisse est une étape essentielle pour gérer efficacement son
              restaurant. Que vous soyez restaurateur traditionnel, fast-food ou café, il existe
              aujourd'hui de nombreuses solutions adaptées à chaque besoin.
            </p>

            <p className="text-gray-700 mb-6">
              Dans ce comparatif, nous avons analysé les meilleurs logiciels de caisse pour restaurants
              disponibles en France selon plusieurs critères : fonctionnalités, prix, simplicité
              d'utilisation et support client.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              Quel est le meilleur logiciel de caisse pour restaurant ?
            </h2>

            <p className="text-gray-700 mb-6">
              Le meilleur logiciel de caisse dépend avant tout de votre type de restaurant. Un
              restaurant traditionnel n'aura pas les mêmes besoins qu'un fast-food ou un food truck.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Points clés à considérer :</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">
                    <strong>Gestion des tables :</strong> essentielle pour les restaurants avec service
                    en salle
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">
                    <strong>Commandes en ligne :</strong> click & collect et livraison pour augmenter votre
                    chiffre d'affaires
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">
                    <strong>Gestion des stocks :</strong> suivez vos ingrédients et anticipez les ruptures
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">
                    <strong>Conformité NF525 :</strong> obligatoire en France depuis 2018
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Software Comparison */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Comparatif des logiciels de caisse pour restaurants
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {restaurantSoftware.map((software) => (
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
                  <p className="text-sm font-semibold text-gray-700 mb-2">Avantages :</p>
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
                  <p className="text-lg font-bold text-blue-600">{software.price}</p>
                </div>

                <Link
                  href={`/logiciel/${software.slug}`}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-center block transition-colors"
                >
                  Voir la fiche détaillée
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Choose Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Comment choisir son logiciel de caisse restaurant ?
            </h2>

            <p className="text-gray-700 mb-6">
              Voici les critères essentiels à prendre en compte pour choisir le bon logiciel de caisse
              pour votre restaurant :
            </p>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">1. Facilité d'utilisation</h3>
                <p className="text-gray-700">
                  Votre personnel doit pouvoir utiliser le logiciel rapidement sans formation longue. Une
                  interface intuitive est essentielle en heure de pointe.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">2. Fonctionnalités restauration</h3>
                <p className="text-gray-700">
                  Gestion des tables, des serveurs, impression en cuisine, modification des commandes...
                  Assurez-vous que le logiciel propose toutes les fonctionnalités dont vous avez besoin.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">3. Prix et abonnement</h3>
                <p className="text-gray-700">
                  Évaluez le coût total : abonnement mensuel, frais de transaction, coût du matériel,
                  formation... Un logiciel gratuit peut s'avérer plus cher au final.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">4. Support client</h3>
                <p className="text-gray-700">
                  En cas de problème pendant le service, vous devez pouvoir joindre le support rapidement.
                  Privilégiez un support en français disponible aux heures d'ouverture.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">5. Conformité légale</h3>
                <p className="text-gray-700">
                  En France, votre logiciel de caisse doit être conforme à la norme NF525 et certifié.
                  Vérifiez que le logiciel est bien aux normes avant de l'acheter.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              Quel est le prix d'un logiciel de caisse restaurant ?
            </h2>

            <p className="text-gray-700 mb-6">
              Le prix d'un logiciel de caisse pour restaurant varie généralement entre 50€ et 150€ par mois
              selon les fonctionnalités et le nombre de caisses.
            </p>

            <p className="text-gray-700 mb-6">
              Certaines solutions proposent également des offres gratuites avec paiement à la transaction,
              idéales pour les petits restaurants ou pour débuter.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Conclusion</h2>

            <p className="text-gray-700 mb-6">
              Le choix du bon logiciel de caisse pour restaurant dépend de vos besoins spécifiques, de la taille
              de votre établissement et de votre budget.
            </p>

            <p className="text-gray-700 mb-8">
              Prenez le temps de comparer les solutions et n'hésitez pas à tester plusieurs démos avant de
              prendre votre décision.
            </p>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Besoin d'aide pour choisir ?</h3>
              <p className="text-blue-100 mb-6">
                Utilisez notre comparateur pour trouver le logiciel de caisse idéal pour votre restaurant
              </p>
              <Link
                href="/comparateur"
                className="inline-flex items-center bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Accéder au comparateur
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

