import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle, Phone, XCircle } from "lucide-react";
import { softwareList } from "../../data/softwareData";

export default async function SoftwarePage({
  params,
}: {
  // Next.js treats dynamic route params as async in newer versions.
  // Await before reading properties like `slug`.
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;
  const software = softwareList.find((sw) => sw.slug === slug);
  const hotlinePhone = "0670264231";

  if (!software) {
    notFound();
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <img
              src={software.image}
              alt={software.name}
              className="w-full md:w-64 h-64 object-cover rounded-xl shadow-lg"
            />
            <div className="flex-1">
              {software.badge && (
                <div className="bg-purple-100 text-purple-700 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                  {software.badge}
                </div>
              )}
              <h1 className="text-4xl font-bold text-gray-900 mb-3">{software.name}</h1>
              <p className="text-xl text-gray-600 mb-4">{software.tagline}</p>

              <div className="text-lg mb-6">
                <span className="text-gray-600">À partir de </span>
                <span className="font-bold text-blue-600">
                  {software.price.replace("À partir de ", "")}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${hotlinePhone}`}
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
                >
                  Appeler la hotline
                  <Phone className="ml-2" size={20} />
                </a>
                <Link
                  href="/contact"
                  className="bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-300 px-8 py-3 rounded-lg font-semibold transition-colors text-center"
                >
                  Demander un rappel
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Présentation de {software.name}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">{software.detailedDescription}</p>
        </div>
      </section>

      {/* Additional feature sections (optional, only for some softwares) */}
      {(software.newFeatures?.length ||
        software.services?.length ||
        software.topFeatures?.length) && (
        <section className="py-12 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Fonctionnalités clés
            </h2>
            <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
              Nos nouveautés, services et indispensables pour les restaurateurs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {software.newFeatures?.length ? (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Nos nouveautés</h3>
                  <ul className="space-y-3">
                    {software.newFeatures.map((nf, index) => (
                      <li key={index} className="text-gray-700 flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        {nf}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {software.services?.length ? (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Les services</h3>
                  <ul className="space-y-3">
                    {software.services.map((s, index) => (
                      <li key={index} className="text-gray-700 flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {software.topFeatures?.length ? (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Les tops fonctionnalités</h3>
                  <ul className="space-y-3">
                    {software.topFeatures.map((tf, index) => (
                      <li key={index} className="text-gray-700 flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        {tf}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      )}

      {/* Pros and Cons */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <CheckCircle className="text-green-500 mr-3" size={32} />
                Avantages
              </h2>
              <ul className="space-y-3">
                {software.pros.map((pro, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <XCircle className="text-red-500 mr-3" size={32} />
                Inconvénients
              </h2>
              <ul className="space-y-3">
                {software.cons.map((con, index) => (
                  <li key={index} className="flex items-start">
                    <XCircle className="text-red-500 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Tarifs de {software.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {software.pricing.map((plan, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 border-2 border-gray-200 hover:border-blue-500 transition-colors"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.plan}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-blue-600">{plan.price}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  Parler à un conseiller
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Parlez à un expert pour {software.name}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Dites-nous ce que vous cherchez : on vous recontacte rapidement pour un échange
            adapté à votre établissement.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
            <a
              href={`tel:${hotlinePhone}`}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
            >
              Appeler maintenant
              <Phone className="ml-2" size={20} />
            </a>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg border-2 border-white/30 transition-colors inline-flex items-center justify-center"
            >
              Demander un rappel
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

