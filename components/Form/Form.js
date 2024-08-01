import * as styles from "./Form.styles.js";

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

  function handleSubmit(event) {
    const newSet = createSet();
    addSet(newSet);
  }

  return (
    <Form>
      <styles.VocableAndTranslationWrapper>
        <styles.LabelAndInputWrapper>
          <styles.Label></styles.Label>
          <styles.InputField name="vocable0"></styles.InputField>
        </styles.LabelAndInputWrapper>
        <styles.LabelAndInputWrapper>
          <styles.Label></styles.Label>
          <styles.InputField name="translation0"></styles.InputField>
        </styles.LabelAndInputWrapper>
      </styles.VocableAndTranslationWrapper>

      <styles.VocableAndTranslationWrapper>
        <styles.LabelAndInputWrapper>
          <styles.Label></styles.Label>
          <styles.InputField name="vocable1"></styles.InputField>
        </styles.LabelAndInputWrapper>
        <styles.LabelAndInputWrapper>
          <styles.Label></styles.Label>
          <styles.InputField name="translation1"></styles.InputField>
        </styles.LabelAndInputWrapper>
      </styles.VocableAndTranslationWrapper>

      <styles.VocableAndTranslationWrapper>
        <styles.LabelAndInputWrapper>
          <styles.Label></styles.Label>
          <styles.InputField name="vocable2"></styles.InputField>
        </styles.LabelAndInputWrapper>
        <styles.LabelAndInputWrapper>
          <styles.Label></styles.Label>
          <styles.InputField name="translation2"></styles.InputField>
        </styles.LabelAndInputWrapper>
      </styles.VocableAndTranslationWrapper>

      <styles.VocableAndTranslationWrapper>
        <styles.LabelAndInputWrapper>
          <styles.Label></styles.Label>
          <styles.InputField name="vocable3"></styles.InputField>
        </styles.LabelAndInputWrapper>
        <styles.LabelAndInputWrapper>
          <styles.Label></styles.Label>
          <styles.InputField name="translation3"></styles.InputField>
        </styles.LabelAndInputWrapper>
      </styles.VocableAndTranslationWrapper>

      <styles.VocableAndTranslationWrapper>
        <styles.LabelAndInputWrapper>
          <styles.Label></styles.Label>
          <styles.InputField name="vocable4"></styles.InputField>
        </styles.LabelAndInputWrapper>
        <styles.LabelAndInputWrapper>
          <styles.Label></styles.Label>
          <styles.InputField name="translation4"></styles.InputField>
        </styles.LabelAndInputWrapper>
      </styles.VocableAndTranslationWrapper>
      <styles.SubmitButton onSubmit={handleSubmit} />
    </Form>
  );
}
