import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function SearchResults() {
  const location = useLocation();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [connectionError, setConnectionError] = useState(false);
  const [serverError, setServerError] = useState("");

  const params = new URLSearchParams(location.search);
  const query = params.get("q") || "";
  const category = params.get("category") || "all";

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      setServerError("");
      setConnectionError(false);

      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/search`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query, category }),
        });

        if (!res.ok) {
          const errorData = await res.json();
          setServerError(errorData.error || "Unknown server error");
          return;
        }

        const data = await res.json();
        setResults(data.results || []);
      } catch (err) {
        console.error("Search error:", err);
        setConnectionError(true);
      } finally {
        setLoading(false);
      }
    };

    if (query.trim()) {
      fetchResults();
    } else {
      setLoading(false);
    }
  }, [query, category]);

  if (!query) {
    return <p className="p-4">No search query provided.</p>;
  }

  return (
    <section className="p-6 font-mont">
      <h2 className="text-2xl mb-4">
        Search results for <span className="font-bold">"{query}"</span>
      </h2>

      {loading && <p>Loading results...</p>}

      {connectionError && (
        <p className="text-red-600 font-semibold">
          Backend Connection Error. Please try again later.
        </p>
      )}

      {serverError && (
        <p className="text-red-600 font-semibold">{serverError}</p>
      )}

      {!loading && !connectionError && !serverError && results.length === 0 && (
        <p>No results found.</p>
      )}

      {!loading && results.length > 0 && (
        <ul className="space-y-3">
          {results.map((item) => (
            <li
              key={item.id}
              className="p-4 border rounded"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-800">
                <span className="font-medium">Type:</span>{" "}
                {item.type || "Unknown"}
              </p>
              <p className="text-sm text-gray-800">
                <span className="font-medium">Language:</span>{" "}
                {item.language || "N/A"}
              </p>
              {item.description && (
                <p className="text-sm text-gray-800 my-2">
                  {item.description}
                </p>
              )}
              {item.created_at && (
                <p className="text-xs text-gray-600">
                  Added: {new Date(item.created_at).toLocaleDateString()}
                </p>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
