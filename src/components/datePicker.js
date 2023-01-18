export default function DatePicker() {
  const defaultDate = new Date();
  const year = defaultDate.getFullYear();
  const month = defaultDate.getMonth() + 1;
  const date = defaultDate.getDate();
  return (
    <section>
      <input placeholder={`${year}-${month}-${date}`} />
    </section>
  );
}
