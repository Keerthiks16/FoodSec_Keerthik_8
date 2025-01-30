import React, { useState } from "react";
import {
  Search,
  Phone,
  Mail,
  MapPin,
  Filter,
  Globe,
  Clock,
  Award,
  FileText,
  Languages,
} from "lucide-react";

const FarmerRetailerNetwork = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedState, setSelectedState] = useState("all");

  // Full retailer data from the JSON file
  const retailerData = {
    states: {
      Maharashtra: {
        retailers: [
          {
            id: "MH001",
            name: "Krishna Agro Distributors",
            type: "Distributor",
            products: ["Rice", "Wheat", "Pulses", "Soybeans"],
            specialties: ["Organic Farming", "Bulk Supply"],
            city: "Pune",
            district: "Pune",
            contact: {
              phone: "+91 98765 43210",
              alternatePhone: "+91 98765 43211",
              email: "contact@krishnaagro.in",
              address: "123, Agricultural Market Yard, Pune",
              website: "www.krishnaagro.in",
            },
            availableFor: "Bulk grain purchasing",
            rating: 4.8,
            languages: ["Marathi", "Hindi", "English"],
            minimumOrderQuantity: "5 tonnes",
            paymentTerms: "50% advance, 50% on delivery",
            operatingHours: "9:00 AM - 6:00 PM",
            certifications: ["FSSAI", "Organic India"],
          },
          {
            id: "MH002",
            name: "Mumbai Fresh Exports",
            type: "Exporter",
            products: ["Alphonso Mangoes", "Pomegranates", "Grapes", "Bananas"],
            specialties: ["Export Quality Packaging", "Cold Chain"],
            city: "Mumbai",
            district: "Mumbai Suburban",
            contact: {
              phone: "+91 98765 43212",
              alternatePhone: "+91 98765 43213",
              email: "exports@mumbaifresh.in",
              address: "45, APMC Market, Vashi, Navi Mumbai",
              website: "www.mumbaifresh.in",
            },
            availableFor: "Export quality produce",
            rating: 4.7,
            languages: ["Marathi", "Hindi", "English", "Gujarati"],
            minimumOrderQuantity: "2 tonnes",
            paymentTerms: "LC accepted",
            operatingHours: "24x7",
            certifications: ["APEDA", "GlobalGAP"],
          },
          {
            id: "MH003",
            name: "Nashik Farmer Connect",
            type: "Market",
            products: ["Grapes", "Onions", "Tomatoes", "Wine Grapes"],
            specialties: ["Direct Farmer Connect", "Quality Testing"],
            city: "Nashik",
            district: "Nashik",
            contact: {
              phone: "+91 98765 43214",
              alternatePhone: "+91 98765 43215",
              email: "info@nashikfarmer.in",
              address: "Near Nashik Phata, Agricultural Market",
              website: "www.nashikfarmer.in",
            },
            availableFor: "Direct farm procurement",
            rating: 4.9,
            languages: ["Marathi", "Hindi"],
            minimumOrderQuantity: "1 tonne",
            paymentTerms: "Immediate payment",
            operatingHours: "6:00 AM - 8:00 PM",
            certifications: ["FSSAI"],
          },
          {
            id: "MH004",
            name: "Nagpur Orange Traders",
            type: "Distributor",
            products: ["Oranges", "Sweet Lime", "Lemons"],
            specialties: ["Citrus Fruits", "Packaging"],
            city: "Nagpur",
            district: "Nagpur",
            contact: {
              phone: "+91 98765 43216",
              alternatePhone: "+91 98765 43217",
              email: "sales@nagpurorange.in",
              address: "Orange Market Complex, Nagpur",
              website: "www.nagpurorange.in",
            },
            availableFor: "Bulk citrus fruit supply",
            rating: 4.6,
            languages: ["Marathi", "Hindi", "English"],
            minimumOrderQuantity: "500 kg",
            paymentTerms: "Weekly payment",
            operatingHours: "7:00 AM - 7:00 PM",
            certifications: ["FSSAI", "ISO 9001"],
          },
        ],
      },
      Punjab: {
        retailers: [
          {
            id: "PB001",
            name: "Singh Fresh Vegetables",
            type: "Retailer",
            products: ["Seasonal Vegetables", "Wheat", "Rice", "Potatoes"],
            specialties: ["Fresh Produce", "Cold Storage"],
            city: "Amritsar",
            district: "Amritsar",
            contact: {
              phone: "+91 87654 32109",
              alternatePhone: "+91 87654 32110",
              email: "info@singhfresh.in",
              address: "Near Golden Temple, Amritsar",
              website: "www.singhfresh.in",
            },
            availableFor: "Direct farm-to-store vegetables",
            rating: 4.6,
            languages: ["Punjabi", "Hindi", "English"],
            minimumOrderQuantity: "500 kg",
            paymentTerms: "Cash and carry",
            operatingHours: "5:00 AM - 9:00 PM",
            certifications: ["FSSAI"],
          },
          {
            id: "PB002",
            name: "Ludhiana Grain Market",
            type: "Market",
            products: ["Wheat", "Rice", "Maize", "Pulses"],
            specialties: ["Grain Quality Testing", "Storage"],
            city: "Ludhiana",
            district: "Ludhiana",
            contact: {
              phone: "+91 87654 32111",
              alternatePhone: "+91 87654 32112",
              email: "contact@ludhianamarket.in",
              address: "Grain Market Road, Ludhiana",
              website: "www.ludhianamarket.in",
            },
            availableFor: "Wholesale grain trading",
            rating: 4.9,
            languages: ["Punjabi", "Hindi"],
            minimumOrderQuantity: "1 tonne",
            paymentTerms: "RTGS/NEFT",
            operatingHours: "24x7",
            certifications: ["FSSAI", "ISO 22000"],
          },
          {
            id: "PB003",
            name: "Jalandhar Potato Kings",
            type: "Distributor",
            products: ["Potatoes", "Onions", "Garlic"],
            specialties: ["Cold Storage", "Sorting"],
            city: "Jalandhar",
            district: "Jalandhar",
            contact: {
              phone: "+91 87654 32113",
              alternatePhone: "+91 87654 32114",
              email: "info@potatokings.in",
              address: "Cold Storage Complex, Jalandhar",
              website: "www.potatokings.in",
            },
            availableFor: "Bulk vegetable supply",
            rating: 4.7,
            languages: ["Punjabi", "Hindi", "English"],
            minimumOrderQuantity: "2 tonnes",
            paymentTerms: "15 days credit",
            operatingHours: "8:00 AM - 8:00 PM",
            certifications: ["FSSAI"],
          },
        ],
      },
      Gujarat: {
        retailers: [
          {
            id: "GJ001",
            name: "Patel Organic Market",
            type: "Market",
            products: ["Organic Vegetables", "Cotton", "Groundnuts", "Spices"],
            specialties: ["Organic Certification", "Quality Testing"],
            city: "Ahmedabad",
            district: "Ahmedabad",
            contact: {
              phone: "+91 76543 21098",
              alternatePhone: "+91 76543 21099",
              email: "partnership@patelorganic.in",
              address: "Organic Market Complex, Ahmedabad",
              website: "www.patelorganic.in",
            },
            availableFor: "Local organic farmer partnerships",
            rating: 4.9,
            languages: ["Gujarati", "Hindi", "English"],
            minimumOrderQuantity: "100 kg",
            paymentTerms: "Immediate payment",
            operatingHours: "7:00 AM - 9:00 PM",
            certifications: ["FSSAI", "India Organic"],
          },
          {
            id: "GJ002",
            name: "Surat Diamond Exports",
            type: "Exporter",
            products: ["Mangoes", "Bananas", "Chikoo", "Sapota"],
            specialties: ["Export Packaging", "Quality Control"],
            city: "Surat",
            district: "Surat",
            contact: {
              phone: "+91 76543 21100",
              alternatePhone: "+91 76543 21101",
              email: "exports@suratdiamond.in",
              address: "GIDC, Surat",
              website: "www.suratdiamond.in",
            },
            availableFor: "International exports",
            rating: 4.8,
            languages: ["Gujarati", "Hindi", "English"],
            minimumOrderQuantity: "5 tonnes",
            paymentTerms: "LC only",
            operatingHours: "24x7",
            certifications: ["APEDA", "GlobalGAP", "FSSAI"],
          },
        ],
      },
      "Tamil Nadu": {
        retailers: [
          {
            id: "TN001",
            name: "Chennai Fresh Foods",
            type: "Distributor",
            products: ["Rice", "Vegetables", "Fruits", "Coconuts"],
            specialties: ["Fresh Produce", "Rice Varieties"],
            city: "Chennai",
            district: "Chennai",
            contact: {
              phone: "+91 65432 10987",
              alternatePhone: "+91 65432 10988",
              email: "business@chennaifresh.in",
              address: "Koyambedu Market Complex, Chennai",
              website: "www.chennaifresh.in",
            },
            availableFor: "South Indian produce distribution",
            rating: 4.7,
            languages: ["Tamil", "English", "Telugu"],
            minimumOrderQuantity: "1 tonne",
            paymentTerms: "7 days credit",
            operatingHours: "4:00 AM - 10:00 PM",
            certifications: ["FSSAI", "ISO 9001"],
          },
          {
            id: "TN002",
            name: "Coimbatore Vegetable Market",
            type: "Market",
            products: ["Vegetables", "Fruits", "Flowers"],
            specialties: ["Fresh Produce", "Wholesale"],
            city: "Coimbatore",
            district: "Coimbatore",
            contact: {
              phone: "+91 65432 10989",
              alternatePhone: "+91 65432 10990",
              email: "info@coimbatoremarket.in",
              address: "Market Road, Coimbatore",
              website: "www.coimbatoremarket.in",
            },
            availableFor: "Wholesale trading",
            rating: 4.8,
            languages: ["Tamil", "English"],
            minimumOrderQuantity: "200 kg",
            paymentTerms: "Cash and carry",
            operatingHours: "3:00 AM - 11:00 PM",
            certifications: ["FSSAI"],
          },
          {
            id: "TN003",
            name: "Madurai Banana Traders",
            type: "Exporter",
            products: ["Bananas", "Coconuts", "Mangoes"],
            specialties: ["Banana Varieties", "Export"],
            city: "Madurai",
            district: "Madurai",
            contact: {
              phone: "+91 65432 10991",
              alternatePhone: "+91 65432 10992",
              email: "exports@maduraibanana.in",
              address: "Banana Market, Madurai",
              website: "www.maduraibanana.in",
            },
            availableFor: "Banana exports",
            rating: 4.6,
            languages: ["Tamil", "English"],
            minimumOrderQuantity: "2 tonnes",
            paymentTerms: "Advance payment",
            operatingHours: "6:00 AM - 6:00 PM",
            certifications: ["APEDA", "FSSAI"],
          },
        ],
      },
    },
  };

  const categories = ["all", "Distributor", "Retailer", "Market", "Exporter"];
  const states = ["all", ...Object.keys(retailerData.states)];

  // Get all retailers in a flat array
  const getAllRetailers = () => {
    if (selectedState === "all") {
      return Object.values(retailerData.states).flatMap(
        (state) => state.retailers
      );
    }
    return retailerData.states[selectedState]?.retailers || [];
  };

  const filteredRetailers = getAllRetailers().filter((retailer) => {
    const matchesSearch =
      retailer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      retailer.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || retailer.type === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-green-800 mb-8">
          Farmer Connect Network
        </h1>

        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 text-green-600 h-5 w-5" />
            <input
              type="text"
              placeholder="Search by name or city..."
              className="w-full pl-10 pr-4 py-2 border-2 border-green-200 rounded-lg focus:outline-none focus:border-green-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="text-green-600 h-5 w-5" />
            <select
              className="p-2 border-2 border-green-200 rounded-lg focus:outline-none focus:border-green-500"
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
            >
              {states.map((state) => (
                <option key={state} value={state}>
                  {state === "all" ? "All States" : state}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <Filter className="text-green-600 h-5 w-5" />
            <select
              className="p-2 border-2 border-green-200 rounded-lg focus:outline-none focus:border-green-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === "all" ? "All Categories" : category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Retailers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRetailers.map((retailer) => (
            <div
              key={retailer.id}
              className="bg-white rounded-lg shadow-lg border-2 border-green-100 hover:border-green-300 transition-all overflow-hidden"
            >
              <div className="bg-green-50 p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-green-800">
                      {retailer.name}
                    </h3>
                    <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm mt-2">
                      {retailer.type}
                    </span>
                  </div>
                  <div className="bg-green-100 px-2 py-1 rounded-full">
                    ⭐ {retailer.rating}
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="space-y-3">
                  <p className="text-gray-600 flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-green-600" />
                    {retailer.city}, {retailer.district}
                  </p>
                  <p className="text-gray-600">
                    <strong>Products:</strong> {retailer.products.join(", ")}
                  </p>
                  <p className="text-gray-600">
                    <strong>Looking for:</strong> {retailer.availableFor}
                  </p>
                  <div className="border-t border-green-100 pt-3 mt-3">
                    <p className="flex items-center gap-2 text-green-700">
                      <Phone className="h-4 w-4" />
                      {retailer.contact.phone}
                    </p>
                    <p className="flex items-center gap-2 text-green-700">
                      <Mail className="h-4 w-4" />
                      {retailer.contact.email}
                    </p>
                    <p className="text-gray-600 mt-2">
                      <strong>Address:</strong> {retailer.contact.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredRetailers.length === 0 && (
          <div className="text-center text-gray-600 py-8">
            No retailers found matching your criteria. Try adjusting your
            filters.
          </div>
        )}
      </div>
    </div>
  );
};

export default FarmerRetailerNetwork;
