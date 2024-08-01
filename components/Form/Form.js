export default function Form() {
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
  return <div></div>;
}
