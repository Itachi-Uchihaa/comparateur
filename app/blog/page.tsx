import { ArrowRight, BookOpen, Calendar } from "lucide-react";

const blogPosts = [
  {
    id: "1",
    title: "Logiciel de caisse obligatoire en France : tout ce qu'il faut savoir",
    excerpt:
      "Depuis 2018, l'utilisation d'un logiciel de caisse certifié est obligatoire pour tous les commerces en France. Découvrez les règles et sanctions.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
    date: "18 mars 2026",
    category: "Réglementation",
    readTime: "5 min",
  },
  {
    id: "2",
    title: "Comment choisir un logiciel de caisse POS en 2026",
    excerpt:
      "Guide complet pour choisir le bon logiciel de caisse : fonctionnalités essentielles, prix, conformité légale et critères de sélection.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    date: "15 mars 2026",
    category: "Guide",
    readTime: "8 min",
  },
  {
    id: "3",
    title: "Caisse enregistreuse vs logiciel de caisse : que choisir ?",
    excerpt:
      "Comparaison détaillée entre caisse enregistreuse traditionnelle et logiciel de caisse moderne. Avantages, inconvénients et recommandations.",
    image:
      "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=600&h=400&fit=crop",
    date: "12 mars 2026",
    category: "Comparatif",
    readTime: "6 min",
  },
  {
    id: "4",
    title: "Top 10 des meilleurs logiciels POS pour restaurants",
    excerpt:
      "Notre sélection des 10 meilleurs logiciels de caisse pour restaurants en 2026. Comparaison, prix et fonctionnalités détaillées.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    date: "10 mars 2026",
    category: "Top 10",
    readTime: "10 min",
  },
  {
    id: "5",
    title: "Logiciel de caisse gratuit : est-ce vraiment intéressant ?",
    excerpt:
      "Analyse des solutions de caisse gratuites : avantages, limites et coûts cachés. Découvrez si c'est la bonne option pour votre commerce.",
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=400&fit=crop",
    date: "8 mars 2026",
    category: "Analyse",
    readTime: "7 min",
  },
  {
    id: "6",
    title: "Norme NF525 : ce que tout commerçant doit savoir",
    excerpt:
      "Tout comprendre sur la certification NF525 obligatoire pour les logiciels de caisse en France. Critères, contrôles et sanctions.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop",
    date: "5 mars 2026",
    category: "Réglementation",
    readTime: "6 min",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BookOpen className="mx-auto mb-6" size={64} />
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Blog & Actualités</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Guides, conseils et actualités sur les logiciels de caisse et la gestion de votre activité
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12 flex flex-col justify-center text-white">
                <div className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full inline-block mb-4 w-fit">
                  Article à la une
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">{blogPosts[0].title}</h2>
                <p className="text-blue-100 text-lg mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-blue-100 mb-6">
                  <span className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    {blogPosts[0].date}
                  </span>
                  <span>•</span>
                  <span>{blogPosts[0].readTime} de lecture</span>
                </div>
                <div>
                  <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold inline-flex items-center transition-colors">
                    Lire l'article
                    <ArrowRight className="ml-2" size={20} />
                  </button>
                </div>
              </div>
              <div className="h-64 lg:h-auto">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Derniers articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.readTime} de lecture</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar size={14} className="mr-2" />
                      {post.date}
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm inline-flex items-center">
                      Lire plus
                      <ArrowRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Parcourir par catégorie</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Guides", "Réglementation", "Comparatifs", "Top 10"].map((category) => (
              <button
                key={category}
                className="bg-gradient-to-br from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 border-2 border-blue-200 rounded-xl p-6 text-center transition-all hover:shadow-md"
              >
                <div className="text-2xl mb-2">📚</div>
                <div className="font-semibold text-gray-900">{category}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Restez informé des dernières actualités
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Recevez nos guides et conseils directement dans votre boîte mail
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors whitespace-nowrap"
            >
              S'abonner
            </button>
          </form>
          <p className="text-sm text-blue-200 mt-4">Pas de spam, désinscription à tout moment</p>
        </div>
      </section>
    </div>
  );
}

