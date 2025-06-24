type SeriesData = {
  title_id: number;
  series_title: string;
  proposal_id: number;
  why: string;
  for_whom1: string;
  for_whom2: string;
  for_whom3: string;
  created_at: string;
};

export default function SeriesDetailList({
  seriesId,
  seriesData,
}: {
  seriesId: string;
  seriesData: SeriesData[] | null;
}) {
  if (!seriesData) {
    return <div></div>;
  }

  const filteredId = seriesData.filter(
    (item) => String(item.title_id) === seriesId
  );

  return (
    <main>
      {filteredId.map((item) => (
        <div key={item.proposal_id}>
          <div>
            <p>{item.why}</p>
          </div>
        </div>
      ))}
    </main>
  );
}
