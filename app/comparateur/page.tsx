'use client';

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpDown, Filter, Star, X } from "lucide-react";
import { softwareList } from "../data/softwareData";

type SortKey = "name" | "price" | "ease" | "support" | "features";
type SortOrder = "asc" | "desc";

export default function ComparateurPage() {
  const [filters, setFilters] = useState({
    category: "",
    budget: "",
  });
  const [sortKey, setSortKey] = useState<SortKey>("features");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [showFilters, setShowFilters] = useState(false);

  const filteredAndSortedSoftware = useMemo(() => {
    let result = [...softwareList];

    // Apply filters
    if (filters.category) {
      result = result.filter((sw) => sw.categories.includes(filters.category));
    }

    if (filters.budget) {
      const [min, max] = filters.budget.split("-").map(Number);
      result = result.filter((sw) => {
        if (max) {
          return sw.priceNumeric >= min && sw.priceNumeric <= max;
        }
        return sw.priceNumeric >= min;
      });
    }

    // Apply sorting
    result.sort((a, b) => {
      let aValue: number | string = 0;
      let bValue: number | string = 0;

      switch (sortKey) {
        case "name":
          aValue = a.name;
          bValue = b.name;
          break;
        case "price":
          aValue = a.priceNumeric;
          bValue = b.priceNumeric;
          break;
        case "ease":
          aValue = a.ease;
          bValue = b.ease;
          break;
        case "support":
          aValue = a.support;
          bValue = b.support;
          break;
        case "features":
          aValue = a.features;
          bValue = b.features;
          break;
      }

      if (typeof aValue === "string" && typeof bValue === "string") {
        return sortOrder === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      // Ici, `aValue`/`bValue` sont forcément des nombres (tous les autres `sortKey` sont numériques).
      const aNum = aValue as number;
      const bNum = bValue as number;
      return sortOrder === "asc" ? aNum - bNum : bNum - aNum;
    });

    return result;
  }, [filters, sortKey, sortOrder]);

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("desc");
    }
  };

  const clearFilters = () => {
    setFilters({
      category: "",
      budget: "",
    });
  };

  const hasActiveFilters = filters.category || filters.budget;

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Comparateur de logiciels de caisse
          </h1>
          <p className="text-lg text-gray-600">
            Comparez {softwareList.length} solutions et trouvez celle qui vous convient
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Filter className="text-gray-600 mr-2" size={20} />
              <h2 className="text-lg font-semibold text-gray-900">Filtrer les résultats</h2>
            </div>
            <div className="flex items-center gap-4">
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center"
                >
                  <X size={16} className="mr-1" />
                  Réinitialiser
                </button>
              )}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                {showFilters ? "Masquer" : "Afficher"}
              </button>
            </div>
          </div>

          <div className={`${showFilters ? "block" : "hidden md:block"}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type d'activité
                </label>
                <select
                  value={filters.category}
                  onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                >
                  <option value="">Toutes les activités</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="commerce">Commerce</option>
                  <option value="beaute">Beauté & Soin</option>
                  <option value="artisan">Artisan</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget mensuel
                </label>
                <select
                  value={filters.budget}
                  onChange={(e) => setFilters({ ...filters, budget: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                >
                  <option value="">Tous les budgets</option>
                  <option value="0-30">Moins de 30€</option>
                  <option value="30-60">30€ - 60€</option>
                  <option value="60-200">60€ - 200€</option>
                </select>
              </div>

            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-700">
            <span className="font-semibold">{filteredAndSortedSoftware.length}</span>{" "}
            {filteredAndSortedSoftware.length > 1 ? "logiciels trouvés" : "logiciel trouvé"}
          </p>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left">
                    <button
                      onClick={() => handleSort("name")}
                      className="flex items-center text-sm font-semibold text-gray-700 hover:text-blue-600"
                    >
                      Logiciel
                      <ArrowUpDown size={16} className="ml-2" />
                    </button>
                  </th>
                  <th className="px-6 py-4 text-left hidden md:table-cell">
                    <span className="text-sm font-semibold text-gray-700">Type</span>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <button
                      onClick={() => handleSort("price")}
                      className="flex items-center text-sm font-semibold text-gray-700 hover:text-blue-600"
                    >
                      Prix
                      <ArrowUpDown size={16} className="ml-2" />
                    </button>
                  </th>
                  <th className="px-6 py-4 text-left hidden lg:table-cell">
                    <button
                      onClick={() => handleSort("ease")}
                      className="flex items-center text-sm font-semibold text-gray-700 hover:text-blue-600"
                    >
                      Facilité
                      <ArrowUpDown size={16} className="ml-2" />
                    </button>
                  </th>
                  <th className="px-6 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredAndSortedSoftware.map((software) => (
                  <tr key={software.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div>
                          <div className="font-semibold text-gray-900">{software.name}</div>
                          {software.badge && (
                            <div className="text-xs text-gray-500 mt-1">{software.badge}</div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 hidden md:table-cell">
                      <div className="text-sm text-gray-600">{software.type}</div>
                      <div className="text-xs text-gray-500">{software.clientType}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{software.price}</div>
                    </td>
                    <td className="px-6 py-4 hidden lg:table-cell">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={`${
                              i < software.ease ? "text-yellow-400 fill-current" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Link
                        href={`/logiciel/${software.slug}`}
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                      >
                        Voir →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {filteredAndSortedSoftware.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              Aucun logiciel ne correspond à vos critères. Essayez de modifier les filtres.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

