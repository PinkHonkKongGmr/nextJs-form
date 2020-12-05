import { onlyLetters } from "./patternsRegexp";

const templates = {
  ru: {
    onlyLettersTemplate: (thirst, second) =>
      `Введите ${thirst}, в ${second} могут быть только буквы`,
    emailTemplate: () => "Пожалуйста укажите электронную почту",
    genderTemplate: () => "укажите пол",
    githubTemplate: () => "Проверьте правильность ссылки",
  },
};

export const submitButton = {
  ru: "Отправить",
};

export const applicantFormConsts = {
  ru: {
    title: "Анкета соискателя",
    personalData: "Личные данные",
    name: {
      name: "name",
      label: "Имя",
      message: templates.ru.onlyLettersTemplate("имя", "имени"),
      pattern: onlyLetters,
    },

    lastname: {
      name: "lastname",
      label: "Фамилия",
      message: templates.ru.onlyLettersTemplate("фамилию", "фамилии"),
      pattern: onlyLetters,
    },
    email: {
      name: "email",
      label: "Электронная почта",
      message: templates.ru.emailTemplate(),
    },
    resume: {
      text: "Загрузить резюме",
    },
    gender: {
      name: "gender",
      label: "Пол",
      message: templates.ru.genderTemplate(),
      values: {
        male: {
          value: "male",
          text: "Мужской",
        },
        female: {
          value: "female",
          text: "Женский",
        },
      },
    },
    github: {
      name: "Github",
      label: "Вставьте ссылку на Github",
      type: "url",
      message: templates.ru.githubTemplate(),
    },
  },
};
