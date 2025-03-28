import getWikiResults from "../lib/getWikiResults";
import Item from "./components/Items";

type Props = Promise<{ searchTerm: string }>;

export async function generateMetadata({ params }: { params: Props }) {
    const { searchTerm } = await params;
    const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
    const data = await wikiData;
    const displayTerm = searchTerm.replaceAll("%20", " ");

    if (!data?.query?.pages) {
        return { title: `${displayTerm} not found` };
    }

    return {
        title: displayTerm,
        description: `Search results for ${displayTerm}`,
    };
}

export default async function SearchResults({ params }: { params: Props }) {
    const { searchTerm } = await params;
    const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
    const data = await wikiData;
    const results: Result[] | undefined = data?.query?.pages;

    const content = (
        <main>
            {results ? (
                Object.values(results).map((result) => (
                    <Item key={result.pageid} result={result} />
                ))
            ) : (
                <h2>{searchTerm} not Found</h2>
            )}
        </main>
    );

    return content;
}
