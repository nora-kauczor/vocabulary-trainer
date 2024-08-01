export default function HomePage() {
  function createSet() {
    const set = {};
    set.id = uid();
    set.vocables = [
      {
        vocable: event.target.vocable0,
        translation: event.target.translation0,
      },
      {
        vocable: event.target.vocable1,
        translation: event.target.translation1,
      },
      {
        vocable: event.target.vocable2,
        translation: event.target.translation2,
      },
      {
        vocable: event.target.vocable3,
        translation: event.target.translation3,
      },
      {
        vocable: event.target.vocable4,
        translation: event.target.translation4,
      },
    ];
    return set;
  }

  function intializeSet(set) {
    const revision0 = new Date();
    // mit loop erstellen
    set.revisions = [
      revision0 + 1,
      revision0 + 2,
      revision0 + 3,
      revision0 + 4,
      revision0 + 5,
      revision0 + 6,
      revision0 + 7,
    ];
  }

  function createRevisions(revision0) {}

  // x: wievielte Wiederholung
  // timespanX: Abstand zum Datum revision0
  // revisionX: Datum der x-ten Wiederholung

  function createRevision(x) {
    // const timespanX = timespanX-1 + x
    const lastNumber = x - 1;
    // const newRevisionName = revision;
    // const newRevisionValue =
  }

  function createRevision1(revision0) {
    const revision1 = revision0 + 1;
    return revision1;
  }

  return (
    <div>
      <h1>Hello from Next.js</h1>
    </div>
  );
}
