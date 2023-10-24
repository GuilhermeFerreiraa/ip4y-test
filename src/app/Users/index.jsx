import { View } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import SectionTitle from "~components/SectionTitle";

import { TextMedium } from "~components/Text";

import UsersList from "~components/users-list";

export default function UsersScreen() {
  const data = [
    {
      id: 1,
      name: "teste",
      lastName: "da silva",
      email: "teste@teste.com",
      birthdate: "12/12/2002",
      gender: "female",
    },
    {
      id: 2,
      name: "testando",
      lastName: "da silva joao maria",
      email: "teste@teste.com",
      birthdate: "12/12/2002",
      gender: "male",
    },
    {
      id: 3,
      name: "testado",
      lastName: "da silva joao teste",
      email: "teste@teste.com",
      birthdate: "12/12/2002",
      gender: "male-female",
    },
  ];

  return (
    <View className="h-full w-full flex-1 items-center justify-start bg-background">
      <View className="px-5 flex-col py-4 items-start justify-start w-full">
        <View className="w-full flex-row justify-between items-center">
          <SectionTitle text="Registros" style="text-4xl text-white" />
          <LinearGradient
            className="h-7 w-[93px] rounded-full border-none items-center justify-center"
            colors={["#00C59F", "#00D636"]}
            end={{ x: 0.1, y: 0.2 }}
          >
            <View className="w-[95%] items-center h-[90%] px-3 py-1 bg-background rounded-full">
              {data.length > 0 && (
                <TextMedium textClassName="text-xs text-white">
                  {data.length +
                    " " +
                    (data.length > 1 ? " usuários" : "usuário")}
                </TextMedium>
              )}
            </View>
          </LinearGradient>
        </View>
        <LinearGradient
          className="h-[2px] mt-2 w-[65%] border-none items-center justify-center"
          colors={["#00C59F", "#00D636"]}
          end={{ x: 0.1, y: 0.2 }}
        />
      </View>

      <UsersList data={data} />
    </View>
  );
}
