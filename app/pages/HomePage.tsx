import Link from "next/link";
import { CheckCircle, ArrowRight, Users, Zap, Shield, TrendingUp } from "lucide-react";
import { softwareList } from "../data/softwareData";
import { useState } from "react";

export function HomePage() {
  const [formData, setFormData] = useState({
    activity: "",
    employees: "",
    budget: "",
    email: "",
  });

  // "Logiciels du mois" = sélection des 6 meilleurs sur la base des données (classement interne).
  const topSoftware = [...softwareList].sort((a, b) => b.rating - a.rating).slice(0, 6);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Merci ! Vous recevrez votre recommandation personnalisée par email.");
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Comparez les meilleurs logiciels de caisse en France
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Trouvez la solution de caisse adaptée à votre activité en quelques clics.
              Gratuit, sans engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/comparateur"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors"
              >
                Comparer les logiciels
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <a
                href="#top-logiciels"
                className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-900 px-8 py-3 rounded-md font-medium border border-gray-300 transition-colors"
              >
                Voir les avis
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-gray-50 py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-900">15</div>
              <div className="text-sm text-gray-600 mt-1">Logiciels comparés</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">100%</div>
              <div className="text-sm text-gray-600 mt-1">Gratuit</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">2026</div>
              <div className="text-sm text-gray-600 mt-1">Données à jour</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">NF525</div>
              <div className="text-sm text-gray-600 mt-1">Conformes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Filter Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Trouvez votre logiciel de caisse en 3 clics
            </h2>
            <p className="text-gray-600">Répondez à quelques questions pour voir les solutions adaptées</p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Votre activité
                </label>
                <select className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
                  <option value="">Sélectionnez...</option>
                  <option value="restaurant">Restaurant / Bar</option>
                  <option value="retail">Commerce de détail</option>
                  <option value="salon">Salon de beauté</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget mensuel
                </label>
                <select className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
                  <option value="">Sélectionnez...</option>
                  <option value="0-30">Moins de 30€</option>
                  <option value="30-60">30€ - 60€</option>
                  <option value="60+">Plus de 60€</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre de caisses
                </label>
                <select className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
                  <option value="">Sélectionnez...</option>
                  <option value="1">1 caisse</option>
                  <option value="2-5">2 à 5 caisses</option>
                  <option value="5+">Plus de 5 caisses</option>
                </select>
              </div>
            </div>

            <Link
              href="/comparateur"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium text-center block transition-colors"
            >
              Voir les résultats
            </Link>
          </div>
        </div>
      </section>

      {/* Top Software Section */}
      <section id="top-logiciels" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Les 6 logiciels du mois</h2>
            <p className="text-gray-600">Une sélection de solutions adaptées à votre activité</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topSoftware.map((software) => (
              <div
                key={software.id}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                {software.badge && (
                  <div className="text-sm text-gray-700 mb-3">
                    {software.badge}
                  </div>
                )}
                <div className="flex items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{software.name}</h3>
                    <p className="text-sm text-gray-600">{software.type} • {software.clientType}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{software.tagline}</p>

                <div className="mb-4 pb-4 border-b border-gray-200">
                  <div className="text-sm font-semibold text-gray-700 mb-2">Points forts :</div>
                  <ul className="space-y-1.5">
                    {software.pros.slice(0, 3).map((pro, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                        <span className="line-clamp-1">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <span className="text-gray-600">À partir de </span>
                    <span className="font-bold text-gray-900">{software.price.replace('À partir de ', '')}</span>
                  </div>
                  <Link
                    href={`/logiciel/${software.slug}`}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    Voir →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
                href="/comparateur"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              Voir tous les logiciels
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Guide Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Comment choisir son logiciel de caisse ?
            </h2>
            <p className="text-gray-600">Les critères essentiels pour faire le bon choix</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Type d'activité</h3>
              <p className="text-gray-600 text-sm">
                Choisissez un logiciel adapté : restaurant, commerce, salon...
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Budget</h3>
              <p className="text-gray-600 text-sm">
                De 0€ à 100€+/mois selon vos besoins
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Fonctionnalités</h3>
              <p className="text-gray-600 text-sm">
                Stock, multi-sites, facturation, reporting...
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Conformité</h3>
              <p className="text-gray-600 text-sm">
                Vérifiez la certification NF525 obligatoire
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Besoin d'aide pour choisir ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Recevez une recommandation personnalisée gratuite
          </p>

          <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <select
                value={formData.activity}
                onChange={(e) => setFormData({ ...formData, activity: e.target.value })}
                className="px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                required
              >
                <option value="">Votre activité</option>
                <option value="restaurant">Restaurant</option>
                <option value="retail">Commerce</option>
                <option value="salon">Salon</option>
                <option value="autre">Autre</option>
              </select>

              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Votre email"
                className="px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors"
            >
              Recevoir ma recommandation gratuite
            </button>

            <p className="text-xs text-gray-500 text-center mt-3">
              Gratuit • Sans engagement • Réponse sous 24h
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}