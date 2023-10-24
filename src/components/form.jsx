import { Formik } from "formik";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { date, number, object, string } from "yup";
import {
  cpfFormatted,
  cpfValidate,
  emailValidate,
  formatedCPF,
} from "~helpers/utils";
import InputIcon from "./InputIcon";
import { TouchableOpacity, View } from "react-native";
import { TextMedium, TextRegular, TextSemibold } from "./Text";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";

export default function Form() {
  const initialData = {
    document: "",
    name: "",
    lastName: "",
    birthDate: "",
    email: "",
    gender: "",
  };

  let userSchema = object({
    name: string().required(),
    age: number().required().positive().integer(),
    email: string().email(),
    website: string().url().nullable(),
    createdOn: date().default(() => new Date()),
  });

  return (
    <Formik
      initialValues={initialData}
      validete={userSchema}
      onSubmit={() => {}}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View className="flex-1 items-center justify-start mt-8">
          <KeyboardAwareScrollView className="w-[100%] min-h-screen mx-auto flex-1 p-3 m-0">
            <View className="flex-col flex-1 bg-background rounded-lg px-2 py-6">
              <View className="flex items-center justify-around flex-row max-w-full">
                {/* document */}
                <View className="flex-col w-[45%]">
                  <TextSemibold className="text-sm text-white">
                    CPF*
                  </TextSemibold>
                  <InputIcon
                    label="document"
                    placeholder="1234567890"
                    returnKeyType="done"
                    value={cpfFormatted(values.document)}
                    keyboardType="decimal-pad"
                    error={values.document && !cpfValidate(values.document)}
                    error_text={"CPF Inválido!"}
                    maxLength={14}
                    classname="w-full"
                    onChange={handleChange("document")}
                  />
                </View>
                {/* name */}
                <View className="flex-col w-[45%]">
                  <TextSemibold className="text-sm text-white">
                    Nome*
                  </TextSemibold>

                  <InputIcon
                    label="name"
                    value={values.name}
                    keyboardType="default"
                    placeholder="Seu nome"
                    classname="w-full"
                    returnKeyType="done"
                    onChange={handleChange("name")}
                  />
                </View>
              </View>

              <View className="flex items-center justify-around flex-row max-w-full">
                {/* email */}
                <View className="flex-col w-[45%]">
                  <TextSemibold className="text-sm text-white">
                    E-mail*
                  </TextSemibold>

                  <InputIcon
                    label="email"
                    value={values.email}
                    returnKeyType="done"
                    placeholder="email@email.com"
                    keyboardType="email-address"
                    error_text={"*E-mail Inválido!"}
                    onChange={handleChange("email")}
                    error={values.email && !emailValidate(values.email)}
                    classname="w-full"
                  />
                </View>

                {/* lastName */}
                <View className="flex-col w-[45%]">
                  <TextSemibold className="text-sm text-white">
                    Sobrenome*
                  </TextSemibold>
                  <InputIcon
                    label="lastName"
                    value={values.lastName}
                    keyboardType="default"
                    placeholder="Seu Sobrenome"
                    classname="w-full"
                    returnKeyType="done"
                    onChange={handleChange("lastName")}
                  />
                </View>
              </View>

              <View className="flex items-center justify-around flex-row max-w-full">
                <View className="flex-col w-[45%]">
                  <TextSemibold className="text-sm text-white">
                    Gênero*
                  </TextSemibold>

                  <InputIcon
                    label="gender"
                    value={values.gender}
                    returnKeyType="done"
                    placeholder="Insira seu gênero"
                    error_text={"*E-mail Inválido!"}
                    onChange={handleChange("email")}
                    error={values.email && !emailValidate(values.email)}
                    classname="w-full"
                  />
                </View>

                {/* lastName */}
                <View className="flex-col w-[45%]">
                  <TextSemibold className="text-sm text-white">
                    Data de nascimento*
                  </TextSemibold>
                  <InputIcon
                    label="birthdate"
                    value={values.birthDate}
                    placeholder="00/00/0000"
                    classname="w-full"
                    returnKeyType="done"
                    onChange={handleChange("lastName")}
                  />
                </View>
              </View>

              {/* buttons */}
            </View>
            <View className="flex items-center justify-around flex-row mt-4 max-w-full">
              <LinearGradient
                className="h-10 w-[45%] border-none items-center justify-center"
                colors={["#00C59F", "#00D636"]}
                end={{ x: 0.1, y: 0.2 }}
              >
                <TouchableOpacity className="w-[97.5%] bg-background items-center py-[9px]">
                  <TextMedium textClassName="text-white">Inserir</TextMedium>
                </TouchableOpacity>
              </LinearGradient>

              <LinearGradient
                className="h-10 w-[45%] border-none items-center justify-center"
                colors={["#00C59F", "#00D636"]}
                end={{ x: 0.1, y: 0.2 }}
              >
                <TouchableOpacity className="w-[97.5%] bg-background items-center py-[9px]">
                  <TextMedium textClassName="text-white">Recomeçar</TextMedium>
                </TouchableOpacity>
              </LinearGradient>
            </View>
            <View className="mt-12 items-center justify-center">
              <Link href="/Users">
                <TextRegular className="text-white underline text-sm">
                  Ver todos os registros
                </TextRegular>
              </Link>
            </View>
          </KeyboardAwareScrollView>
        </View>
      )}
    </Formik>
  );
}
