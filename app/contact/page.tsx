'use client';

import { useState } from "react";
import type { FormEvent } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Mail className="mx-auto mb-6" size={64} />
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contactez-nous</h1>
            <p className="text-xl text-blue-100">
              Une question ? Besoin d'aide pour choisir votre logiciel de caisse ? Notre équipe est là
              pour vous aider.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Nom complet
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Jean Dupont"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="jean@exemple.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Sujet</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="question">Question générale</option>
                      <option value="help">Aide au choix d'un logiciel</option>
                      <option value="partnership">Partenariat</option>
                      <option value="technical">Support technique</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Décrivez votre demande en détail..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center"
                  >
                    <Send className="mr-2" size={20} />
                    Envoyer le message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-lg p-3 mr-4">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">contact@caissepro.fr</p>
                    <p className="text-sm text-gray-500 mt-1">Réponse sous 24h</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-lg p-3 mr-4">
                    <Phone className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Téléphone</h3>
                    <p className="text-gray-600">01 23 45 67 89</p>
                    <p className="text-sm text-gray-500 mt-1">Lun-Ven 9h-18h</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-start">
                  <div className="bg-purple-100 rounded-lg p-3 mr-4">
                    <MapPin className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Adresse</h3>
                    <p className="text-gray-600">
                      123 Avenue des Champs-Élysées
                      <br />
                      75008 Paris, France
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Link */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Questions fréquentes</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Consultez notre FAQ pour trouver rapidement des réponses à vos questions.
                </p>
                <button className="bg-white text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg font-semibold text-sm transition-colors">
                  Voir la FAQ
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Questions fréquemment posées
          </h2>
          <div className="space-y-4">
            <details className="bg-gray-50 rounded-lg p-6 group">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                <span>Comment choisir le bon logiciel de caisse ?</span>
                <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-600 mt-4">
                Le choix dépend de votre activité (restaurant, commerce, salon...), de vos besoins en
                fonctionnalités (gestion des stocks, multi-caisses, mobile...) et de votre budget. Utilisez
                notre comparateur pour trouver la solution la plus adaptée.
              </p>
            </details>

            <details className="bg-gray-50 rounded-lg p-6 group">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                <span>Les logiciels de caisse sont-ils obligatoires ?</span>
                <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-600 mt-4">
                Oui, depuis 2018 en France, tout commerce doit utiliser un logiciel de caisse certifié NF525
                pour enregistrer ses ventes. Le non-respect de cette obligation peut entraîner des sanctions.
              </p>
            </details>

            <details className="bg-gray-50 rounded-lg p-6 group">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                <span>Quel est le prix moyen d'un logiciel de caisse ?</span>
                <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-600 mt-4">
                Les prix varient de 0€ (avec frais par transaction) à plus de 150€/mois selon les
                fonctionnalités. En moyenne, comptez entre 50€ et 100€/mois pour une solution complète
                adaptée à une petite entreprise.
              </p>
            </details>

            <details className="bg-gray-50 rounded-lg p-6 group">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                <span>Puis-je tester avant d'acheter ?</span>
                <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-600 mt-4">
                Oui, la plupart des logiciels proposent une période d'essai gratuite de 14 à 30 jours. Nous
                vous recommandons de tester plusieurs solutions avant de faire votre choix définitif.
              </p>
            </details>

            <details className="bg-gray-50 rounded-lg p-6 group">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                <span>Votre service est-il vraiment gratuit ?</span>
                <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-600 mt-4">
                Oui, notre comparateur et nos recommandations sont 100% gratuits pour les utilisateurs. Nous
                sommes rémunérés par certains éditeurs de logiciels lorsque vous décidez de les tester.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}

