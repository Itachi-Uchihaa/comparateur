import Link from "next/link";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Page non trouvée
          </h2>
          <p className="text-xl text-gray-600">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            <Home className="mr-2" size={20} />
            Retour à l'accueil
          </Link>
          <Link
            href="/comparateur"
            className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-300 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            <Search className="mr-2" size={20} />
            Voir le comparateur
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-4">Pages populaires :</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/meilleur-logiciel-caisse-restaurant"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Logiciels pour restaurants
            </Link>
            <Link
              href="/meilleur-logiciel-caisse-commerce"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Logiciels pour commerces
            </Link>
            <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-medium">
              Blog
            </Link>
            <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

